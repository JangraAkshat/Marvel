import React from 'react'
import TVCard from '../tvcard/TVCard'
import tvArticles from './tv'
import './TVList.css'

const TVList = () => {
    return (
        <div className='tv'>
        <h1 className='tv-head'>TV Shows</h1>
        <div className='tv-list'>
            {tvArticles.map((article, index) => (
                <TVCard
                    key={index}
                    image={article.image}
                    title={article.title}
                    description={article.description}
                    hoverText={article.hoverText}
                    tvURL={article.tvURL}
                />
            ))}
        </div>
        </div>
    )
}

export default TVList
