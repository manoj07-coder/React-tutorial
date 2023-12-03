import React from "react";
import {createRoot} from 'react-dom/client';

import './main.css' 

const title = 'The Kite Runner';
const author = 'Khaled Hosseini';
const img = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579036753i/77203._SY75_.jpg'

function BookList(){
  return(
    <section className="bookList">
    <Book job='developer'/>
    <Book title='random title' number={7}/>
    </section>
  )
}

const Book = (props)=> {
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<BookList />)