import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import './Book.css';

const Book = (props) => {
    const {name, author, img, price, catergory, Released} = props.book;
    return (
        <div className='indivijual-book'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{author}</p>
            <p>Catergory : {catergory}</p>
            <p>Released : {Released}</p>
            <h5>Price : {price} BDT</h5>
            <button onClick={()=>props.handleAddToCart(props.book)} > <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
        </div>
    );
};

export default Book;