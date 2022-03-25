import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart-body'>
            <h2 style={{ textAlign: 'center' }}>Summary</h2>
            <div className="cart-body">
                <p>Selected Items:</p>
                <p>Total Price: $1140</p>
                <p>Shipping Charge: $5</p>
                <p>Tax: $114</p>
                <h4 className='grand-total'>Grand Total: $1559</h4>
            </div>
        </div>
    );
};

export default Cart;