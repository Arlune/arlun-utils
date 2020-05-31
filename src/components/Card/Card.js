import React from 'react'
import './Card.scss'

function Card({ children }) {
  return <div className="card-container">{children}</div>
}

export default Card

/* 
Une carte qui reçoit (children) ce que l'on veut : une image (fit content) et/ou du texte
*/
