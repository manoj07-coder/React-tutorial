import React from "react";
import {createRoot} from 'react-dom/client';

import './main.css'

import {books} from './books'
import Book from './Book'
  

function BookList(){
  return(
    <section className="bookList">
    {books.map((book) => {
      return <Book key={book.id} {...book} />
    })}
    </section>
  )
}      



const root = createRoot(document.getElementById('root'));
root.render(<BookList />)