import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// TODO :
const stripePromise = loadStripe()
const Payment = () => {
      return (
            <div>
                  <h1 className="text-2xl tracking-wide text-yellow-600">--- Payment History ---</h1>
                  <div>
                        <Elements stripe={stripePromise}>

                        </Elements>
                  </div>
            </div>
      );
};

export default Payment;