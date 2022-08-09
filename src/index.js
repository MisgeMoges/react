import React from 'react'
import ReactDOM from 'react-dom'
import { data } from './books'
import SpecificBook from './Book'
import './index.css'

//event handlers, onClick and onMouseOver
function BookList() {
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>
      })}
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
