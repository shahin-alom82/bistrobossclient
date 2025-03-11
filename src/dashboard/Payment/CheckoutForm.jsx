import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { MdPayment } from "react-icons/md";
import useAxiosSecure from "../../contants/useAxiosSecure";
import { AuthContext } from "../../firebase/AuthProvider";
import useCart from "../../contants/useCart";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutForm = () => {
      const [clientSecret, setClientSecret] = useState('')
      const [transactionId, setTransactionId] = useState('')
      const [error, setError] = useState('')
      const stripe = useStripe()
      const elements = useElements()
      const [cart, refetch] = useCart()
      const { user } = useContext(AuthContext)
      const axiosSecure = useAxiosSecure()
      const navigate = useNavigate()

      const totalPrice = cart.reduce((total, item) => total + item.price, 0)

      useEffect(() => {
            if (totalPrice > 0) {
                  axiosSecure.post('/create-payment-intent', { price: totalPrice })
                        .then(res => {
                              console.log('data', res.data.clientSecret)
                              setClientSecret(res?.data?.clientSecret)
                        })
            }
      }, [axiosSecure, totalPrice])



      const handleSubmit = async (event) => {
            event.preventDefault();

            if (!stripe || !elements) {
                  return
            }
            const card = elements.getElement(CardElement)

            if (card == null) {
                  return
            }

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                  type: 'card',
                  card
            })

            if (error) {
                  setError(error.message)
                  console.log('Payment Error', error)
            }
            else {
                  console.log('Payment Method', paymentMethod)
                  setError('')
            }
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
                  payment_method: {
                        card: card,
                        billing_details: {
                              email: user?.email || 'anonymous',
                              name: user?.displayName || 'anonymous'
                        }
                  }
            })
            if (confirmError) {
                  console.log('confirm error')
            } else {
                  console.log('payment intent', paymentIntent)
                  if (paymentIntent.status === 'succeeded') {
                        console.log('transaction id', paymentIntent.id)
                        setTransactionId(paymentIntent.id)


                        // Now Save The Payment in The Database

                        const payment = {
                              price: totalPrice,
                              transactionsId: paymentIntent.id,
                              email: user.email,
                              date: new Date(),
                              cartIds: cart.map((item) => item._id),
                              menuItemIds: cart.map((item) => item.menuId),
                              status: "Pending",
                        };
                        const res = await axiosSecure.post("/payments", payment);
                        console.log("save", res.data);
                        if (res.data?.paymentResult?.insertedId) {
                              Swal.fire({
                                    position: "top-center",
                                    icon: "success",
                                    title: "Payment Successfully!",
                                    showConfirmButton: false,
                                    timer: 1500,
                              });
                        }
                        refetch();
                        navigate("/dashboard/paymenthistory");


                  }
            }

      }



      return (
            <div className="mt-10">
                  <div className="flex items-center gap-4 text-gray-800">
                        <MdPayment size={35} />
                        <h1 className="lg:text-2xl"> Enter Payment Details</h1>
                  </div>
                  <form className="max-w-screen-sm mt-6" onSubmit={handleSubmit}>
                        <CardElement

                              options={{
                                    style: {
                                          base: {

                                                fontSize: '18px',
                                                color: '#424770',
                                                '::placeholder': {
                                                      color: '#aab7c4',
                                                },
                                          },
                                          invalid: {
                                                color: '#9e2146',
                                          },
                                    },
                              }}
                              className="p-3 border-2 rounded border-yellow-600 focus:outline-none focus:ring mb-4"
                        />
                        <button type="submit" className="bg-yellow-500 w-20 py-1 mt-3 text-xl text-gray-700" disabled={!stripe || !clientSecret}>
                              Pay
                        </button>
                        <p className="text-red-600 mt-2 text-sm tracking-wide">{error}</p>
                        {transactionId && <p className="text-green-600 mt-2 text-sm tracking-wide">Your Transaction id {transactionId}</p>}
                  </form>
            </div>
      );
};

export default CheckoutForm;

