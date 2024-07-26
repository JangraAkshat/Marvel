import React from 'react';
import './Comics.css';

const Comics = ({ data }) => {
  return (
    <div className='comics'>
      {data.map(comic => {
        const detailsUrl = comic.urls.find(
          element => element["type"] === "detail"
        ).url;

        return (
          <a
            key={comic.id}
            className='comicCard'
            style={{ backgroundImage: `url(${comic.thumbnail.path}.${comic.thumbnail.extension})`, backgroundSize: 'cover' }}
            href={detailsUrl}
            target='_blank'
            rel='noreferrer'
          >
            <div className="caption">{comic.title}</div>
            <div className="bottom">View Comic Details</div>
          </a>
        );
      })}
    </div>
  );
};

export default Comics;
