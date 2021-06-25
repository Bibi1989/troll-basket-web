import React from 'react'
import "./styles/Checkout.css"

type Props = {
  subtotal: number;
  total: number;
}

const Checkout: React.FC<Props> = ({subtotal, total}) => {
  return (
    <div className="checkout-component cart-card">
      <div>
        <span>Subtotal</span>
        <span>{subtotal}</span>
      </div>
      <div>
        <span>Total</span>
        <span className="total">{total}</span>
      </div>
      <p className="checkout" >Checkout</p>
    </div>
  )
}

export default Checkout
