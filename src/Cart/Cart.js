import React from 'react';
import './Cart.css';

const Cart = ({item}) => {
    return (
        <div className='cart'>
            <img src={item.img} alt="" />
           <h1>{item.name}</h1> 
        </div>
    );
};

export default Cart;