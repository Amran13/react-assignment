import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css';

const Books = () => {
     const [books, setBooks] = useState([]);
     const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('./books.json')
        .then(res=> res.json())
        .then(data => setBooks(data))
    },[])

    const handleAddToCart = (product) => {
        const li = document.createElement('li');
        li.innerText = product.name;
        document.getElementById('list-item').appendChild(li);
        const newCart = [...cart, product]
        setCart(newCart);
    }
    let total = 0;
    for(const product of cart){
        total = total + product.price;
        
    }
    return (
        <div className='books-container'>
            <div className="books">
                {
                    books.map(book => <Book key={book.id} handleAddToCart={handleAddToCart} book={book}></Book>)
                }
            </div>
            <div className="books-cart">
                <h3>Total Added : {cart.length} </h3>
                <h3>Price : {total} </h3>
                <ul id='list-item'></ul>
            </div>
        </div>
    );
};

export default Books;