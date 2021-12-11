import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51K5asoKEjr5O2YTeWo2j4f3Hc08HuQMMf4yQzzlHnbb59ZXJxGBVGY7Z48f5Nbi8RyD69y3ozQKcsGm2gsACOBPx00xx8cGt6L";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

  return (
    <StripeCheckout 
    label='Pay Now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image="https://svgshare.com/i/CUz.svg"
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
  />
  )
};

export default StripeCheckoutButton
