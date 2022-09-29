import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,name,price,ratings,seller} = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <h5>Price: ${price}</h5>
                <p>Manufecturer: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button className='btn-cart' onClick={()=>props.handleAddToCart(props.product)}><p className='btn-cart-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;