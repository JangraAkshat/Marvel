import React from 'react';
import './FanTheoriesCard.css'

const FanTheoriesCard = ({ imageUrl, title, description, alignRight }) => {
    return (
        <div className={`theory-card ${alignRight ? 'align-right' : ''}`}>
            <img src={imageUrl}></img>
            <div className="movie-card-content">
                <h3>{title}</h3>
                <br />
                <p>{description}</p>
            </div>
        </div>
    );
};

export default FanTheoriesCard;
