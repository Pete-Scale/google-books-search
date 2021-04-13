import React, { useState } from 'react'
import axios from 'axios'
import API from '../utils/API'
import SearchForm from '../components/searchForm/searchForm'
import Card from '../components/card/card'

const Search = () => {
  
  const [books, setBooks] = useState([])

  const handleSearchForm = e => {
    e.preventDefault()
    let searchInput = e.target[0].value.trim().replace(/\s\s+/g, ' ').replace(/\s/g, '+')
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        console.log(res.data.items)
        setBooks(res.data.items)
      })
      .catch(err => console.log(err))
  }

  const handleSave = e => {
    e.preventDefault()
    if (e.target.childNodes[0].nodeValue === "Save") {
      let saveBook = {
        title: e.target.parentElement.childNodes[1].innerText,
        authors: e.target.parentElement.childNodes[2].innerText,
        description: e.target.parentElement.childNodes[3].innerText,
        image: e.target.parentElement.childNodes[0].innerText,
        link: e.target.parentElement.childNodes[4].innerText,
        book_id: e.target.attributes.book_id.value
      }
      API.addBook(saveBook)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }

  return (
    <div className="container">
      <SearchForm onSubmit={handleSearchForm} />
        {books.map(book => (
          <div className="col" onClick={handleSave} key={book.id}>
            <Card 
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              description={book.volumeInfo.description === undefined 
                ? "No description for this book." 
                : `${book.volumeInfo.description}`}
              image={book.volumeInfo.imageLinks === undefined 
                ? "" 
                : `${book.volumeInfo.imageLinks.thumbnail}`}
              link={book.volumeInfo.infoLink}
              book_id={book.id}
            />
          </div>
        ))}
    </div>
  )
}

export default Search