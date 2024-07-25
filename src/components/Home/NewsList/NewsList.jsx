import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import newsArticles from './news'
import './NewsList.css';

const NewsList = () => {

  const column1 = [];
  const column2 = [];
  const column3 = [];

  newsArticles.forEach((article, index) => {
    if (index % 3 === 0) {
      column1.push(article);
    } else if (index % 3 === 1) {
      column2.push(article);
    } else {
      column3.push(article);
    }
  });
  

  return (
    <div className='news'>
      <h1 className='news-head'>Marvel News</h1>
    <div className='news-list'>
      <div className='column'>
        {column1.map((article, index) => (
          <div className='card-container' key={index}>
            <NewsCard
              imageUrl={article.imageUrl}
              title={article.title}
              newsUrl={article.newsUrl}
            />
          </div>
        ))}
      </div>
      <div className='column'>
        {column2.map((article, index) => (
          <div className='card-container' key={index}>
            <NewsCard
              imageUrl={article.imageUrl}
              title={article.title}
              newsUrl={article.newsUrl}
            />
          </div>
        ))}
      </div>
      <div className='column'>
        {column3.map((article, index) => (
          <div className='card-container' key={index}>
            <NewsCard
              imageUrl={article.imageUrl}
              title={article.title}
              newsUrl={article.newsUrl}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default NewsList;
