import React from 'react'
import './TVCard.css'

const TVCard = ({ image, title, description, hoverText, tvURL }) => {
  return (
    <div className='tv-card'>
            <a href={tvURL}  target='_blank'>
                <img src={image} alt="Card" className="tv-card-image" />
                <div className="tv-card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="tv-card-hover-text">
                    <p>{hoverText}</p>
                </div>
            </a>
        </div>
  )
}

export default TVCard
