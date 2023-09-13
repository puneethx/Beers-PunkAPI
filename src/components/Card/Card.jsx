import React from 'react'
import "./card.css"
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/`}>
      <div className="card">
        <div className="image">
          <span className='cardspan'>{item.first_brewed}</span>
          <img
            src={ item.image_url }
            alt=""
            className="mainImg"
          />
        </div>
        <h2>{item.name}</h2>
        <div className="more">
            <h3>{item.tagline}</h3>
            <p>{item.description?.substring(0,100)}....</p>
          </div>
      </div>
    </Link>
  )
}

export default Card