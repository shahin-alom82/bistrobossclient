import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
// TODO :
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk)
const Payment = () => {
      return (
            <div>
                  <h1 className="lg:text-2xl tracking-wide text-yellow-600">--- Payment History ---</h1>
                  <div>
                        <Elements stripe={stripePromise}>
                              <CheckoutForm />
                        </Elements>
                  </div>
            </div>
      );
};

export default Payment;