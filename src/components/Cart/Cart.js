import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h4>Order summary</h4>
            <h2>{props.cart.length}</h2>
        </div>
    );
};

export default Cart;