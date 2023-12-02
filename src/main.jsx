import React from "react";
import {createRoot} from 'react-dom/client';

function Book(){
  return (
    <section>
      <Image />
      <Title />
      <Author />
    </section>
  )
}

const Image = () => {
  return <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579036753i/77203._SY75_.jpg" alt="BookImage" />
}

const Title = () => {
  return <h4>The Kite Runner</h4>
}

const Author = () => {
  return <h4>Khaled Hosseini</h4>
}

const root = createRoot(document.getElementById('root'));
root.render(<Book />)