import StripeCheckout from 'react-stripe-checkout';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const axios = require('axios').default;

const KEY = "pk_test_51Jwt0iFFY9U94WMzntLKOp8cFBYUtTwI3iGxblnKZpX4m8hdY4HjCtQQfsQWJXdUiTUVNpUaSKrmMSqhOukplwpD00jEMQ9kCT";

const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        admount: 2000,
                    }
                );
                console.log(res.data);
                navigate("/success");
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, navigate]);
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {stripeToken ? (<span>Processing .. Please Wait...</span>) : (
                <StripeCheckout
                    name="LABA"
                    image=""
                    billingAddress
                    shippingAddress
                    description="Your total is $20"
                    amount={2000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button
                        style={{
                            border: "none",
                            width: 120,
                            borderRadius: 5,
                            padding: "20px",
                            backgroundColor: "black",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "600",
                            cursor: "pointer",
                        }}
                    >
                        Pay Now
                    </button>
                </StripeCheckout>
            )}
        </div>
    );
};

export default Pay
