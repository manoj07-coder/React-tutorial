import React from "react";
import {createRoot} from 'react-dom/client';

import './main.css'

const firstBook = {
  img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579036753i/77203._SY75_.jpg',
  title: 'The Kite Runner',
  author: 'Khaled Hosseini'
}

const secondBook = {
  img : 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1590282886i/9777._SY75_.jpg',
  title: 'The God of Small Things',
  author: 'Arundhati Roy'
}


function BookList(){
  return(
    <section className="bookList">
    <Book img= {firstBook.img} title= {firstBook.title} author= {firstBook.author} />
    <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  )
}

const Book = (props)=> {
  return (
    <article className="book">
      <img src={props.img} />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<BookList />)