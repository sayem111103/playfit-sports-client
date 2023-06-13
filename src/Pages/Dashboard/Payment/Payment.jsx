import { useParams } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const Payment = () => {
    const data = useParams();
    const [cart,] = useCart();
    const filter = cart.find(cd => cd._id === data.id)
    console.log(filter);

    return (
        <div>
            
        </div>
    );
};

export default Payment;