import React from 'react'
import './MovieCard.css'

const MovieCard = ({ image, title, description, hoverText, movieURL }) => {
    return (
        <div className='movie-card'>
            <a href={movieURL}  target='_blank'>
                <img src={image} alt="Card" className="movie-card-image" />
                <div className="movie-card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="movie-card-hover-text">
                    <p>{hoverText}</p>
                </div>
            </a>
        </div>
    )
}

export default MovieCard

