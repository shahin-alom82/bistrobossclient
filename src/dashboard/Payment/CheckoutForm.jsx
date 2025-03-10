import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { MdPayment } from "react-icons/md";

const CheckoutForm = () => {
      const [error, setError] = useState('')
      const stripe = useStripe()
      const elements = useElements()
      const handleSubmit = async (event) => {
            event.preventDefault();

            if (!stripe || !elements) {
                  return
            }
            const card = elements.getElement(CardElement)
            if (card === null) {
                  return
            }
            // else {

            // }

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
                              className="p-3 border-2 border-yellow-600 focus:outline-none focus:ring mb-4"
                        />
                        <button type="submit" className="bg-yellow-500 w-20 py-1 mt-3 text-xl text-gray-700" disabled={!stripe}>
                              Pay
                        </button>
                  </form>
            </div>
      );
};

export default CheckoutForm;