import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useSecure from "../../../Hooks/useSecure";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const CheckoutForm = ({ data }) => {
    const [, refetch] = useCart();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const { user } = useAuth();
    const [secure] = useSecure();
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();


    useEffect(() => {
        secure.post('/create-payment-intent', { price: data?.price })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
    }, [secure, data?.price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!elements || !stripe) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        // card error 
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            // Show error to your customer
            setCardError(error.message);
        }
        else {
            setCardError('')
        }

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                }
            }
        );

        if (confirmError) {
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Show error to your customer (for example, payment
            // details incomplete)
            console.log(confirmError);
        }
        setProcessing(false)
        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent?.id);
            secure.delete(`/classcart/${data._id}`)
                .then(res => { })
            const payment = {
                email: user?.email,
                transactionId: paymentIntent?.id,
                price: data?.price,
                date: new Date(),
                classId: data?.id,
                name: data?.name,
                status: 'paid'
            }
            secure.post('/payment', payment)
                .then(res => {
                    if (res.data.insertedId) {
                        refetch()
                        navigate('/myenrolledclasses')
                    }
                })
        }
    };
    return (
        <div className="w-9/12 mx-auto text-center">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#424770',
                                '::placeholder': {
                                    color: 'grey',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='px-6 py-2 rounded-lg uppercase btn-primary mt-6' type="submit" disabled={!stripe || !elements || processing}>
                    Pay
                </button>
                {/* Show error message to your customers */}
                {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
                {transactionId && <p className="text-green-500">Transaction complete Your transactionId is: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;