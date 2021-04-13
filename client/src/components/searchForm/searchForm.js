import React from 'react'

const SearchForm = (props) => (
  <form className="input-group mb-3" {...props}>
    <label htmlFor="SearchBooks" className="form-label">Search Google Books</label>
    <input className="form-control" id="SearchBooks" {...props} />
    <button type="submit" className="btn btn-primary">Search</button>
  </form>
)

export default SearchForm