import React from 'react'
import './UpcomingCard.css'

const UpcomingCard = ({ image, title, description, hoverText, upcomingURL }) => {
  return (
    <div className='upcoming-card'>
            <a href={upcomingURL}  target='_blank'>
                <img src={image} alt="Card" className="upcoming-card-image" />
                <div className="upcoming-card-content">
                    <h3>{title}</h3>
                    <br />
                    <p>{description}</p>
                </div>
                <div className="upcoming-card-hover-text">
                    <p>{hoverText}</p>
                </div>
            </a>
        </div>
  )
}

export default UpcomingCard
