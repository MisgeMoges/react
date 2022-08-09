import React from 'react'

const Book = ({ img, title, author }) => {
  const complexExample = (title) => {
    console.log(title)
  }
  const eventHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('Hello Misge')
  }
  return (
    <article className=' book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={eventHandler}>
        Reference button
      </button>
      <button type='button' onClick={() => complexExample(title)}>
        complex button
      </button>
    </article>
  )
}

export default Book
