import React from 'react'
import UpcomingCard from '../UpcomingCard/UpcomingCard'
import upcomingArticles from './Upcoming'
import './UpcomingList.css'

const UpcomingList = () => {
    return (
        <div className='upcoming'>
        <h1 className='upcoming-head'>Upcoming</h1>
        <div className='upcoming-list'>
            {upcomingArticles.map((article, index) => (
                <UpcomingCard
                    key={index}
                    image={article.image}
                    title={article.title}
                    description={article.description}
                    hoverText={article.hoverText}
                    upcomingURL={article.upcomingURL}
                />
            ))}
        </div>
        </div>
    )
}

export default UpcomingList