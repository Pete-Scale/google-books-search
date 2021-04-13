import React from 'react'

const Card = (props) => (
  <div className="card">
    <div className="card-body">
      <img src={props.image} className="img-fluid img" alt={props.title} />
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">Authors: {props.authors}</p>
      <p className="card-text">Description: {props.description}</p>
      <a href={props.link} target="_blank" rel="noreferrer" className="btn btn-primary">Buy Book</a>
      <button className="btn btn-success mx-2" book_id={props.book_id}>Save</button>
    </div>
  </div>
)

export default Card