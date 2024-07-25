import React from 'react';
import FanTheoriesCard from '../FanTheoriesCard/FanTheoriesCard';
import theoryArticles from './theories'
import './FanTheoriesList.css';

const TheoryList = () => {

    const column1 = [];
    const column2 = [];
    const column3 = [];

    theoryArticles.forEach((article, index) => {
        if (index % 3 === 0) {
            column1.push(article);
        } else if (index % 3 === 1) {
            column2.push(article);
        } else {
            column3.push(article);
        }
    });

    return (
        <div className='theory-list'>
            <div className='column'>
                {column1.map((article, index) => (
                    <div className='card-container' key={index}>
                        <FanTheoriesCard
                            imageUrl={article.imageUrl}
                            title={article.title}
                            description={article.description}
                        />
                    </div>
                ))}
            </div>
            <div className='column'>
                {column2.map((article, index) => (
                    <div className='theory-card-container' key={index}>
                        <FanTheoriesCard
                            imageUrl={article.imageUrl}
                            title={article.title}
                            description={article.description}
                        />
                    </div>
                ))}
            </div>
            <div className='column'>
                {column3.map((article, index) => (
                    <div className='theory-card-container' key={index}>
                        <FanTheoriesCard
                            imageUrl={article.imageUrl}
                            title={article.title}
                            description={article.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TheoryList;
