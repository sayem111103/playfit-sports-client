import { useParams } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import DashboardHeader from "../../../components/DashboardHeader";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

const Payment = () => {
    const {id} = useParams();
    const [cart,] = useCart();   
    const find = cart.find(cd => cd._id === id);

    return (
        <div className="w-[95%] mx-auto pt-10">
            <DashboardHeader name={'Payment'} />
            <div className="pt-6">
                <Elements stripe={stripePromise}>
                    <CheckoutForm data={find} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;