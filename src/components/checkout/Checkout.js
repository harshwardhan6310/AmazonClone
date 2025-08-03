import React from 'react'
import './Checkout.css'
import Subtotal from '../subtotal/Subtotal';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import CartEmpty from '../cartEmpty/CartEmpty';


function Checkout() {
    const [{basket,user},dispatch] = useStateValue() ;
  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img 
            className='checkout-ad'
            src='/static/amazonPay2.png' />
            <div>
                <h3 className='user-greeting'>
                    Hello, {user?user.email: 'Guest'}
                </h3>
                <h2 className='checkout-title'>
                    Your Cart
                </h2>
                {
                    basket.length ? 
                    basket.map(item => (
                    <CheckoutProduct 
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price= {item.price}
                        rating= {item.rating}
                    />
                    )) 
                    : 
                    <CartEmpty />
                }
            </div>
        </div>
        <div className='checkout-right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout ;