import React from 'react';
import './NewsCard.css'

const NewsCard = ({ imageUrl, title, newsUrl, alignRight }) => {
    return (
        <div className={`card ${alignRight ? 'align-right' : ''}`}>
            <a href={newsUrl} target='_blank' >
                <img src={imageUrl}></img>
                <span>{title}</span>
            </a>
        </div>
    );
};

export default NewsCard;
