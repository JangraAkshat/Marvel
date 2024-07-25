import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'
import movieArticles from './movies'

const MovieList = () => {

    const phase1 = movieArticles.slice(0, 6);
    const phase2 = movieArticles.slice(6, 12);
    const phase3 = movieArticles.slice(12, 23);
    const phase4 = movieArticles.slice(23, 32);
    const phase5 = movieArticles.slice(32, 35);
    return (
        <div className='movie'>

            <h1 className='movie-head movie-heads'>Movies</h1>

            <h2 className='movie-heads'>Phase 1</h2>
            <div className='movies-list phase1'>

                {phase1.map((article, index) => (
                    <MovieCard
                        key={index}
                        image={article.image}
                        title={article.title}
                        description={article.description}
                        hoverText={article.hoverText}
                        movieURL={article.movieURL}
                    />
                ))}
            </div>

            <br />
            <hr />
            <br />
            <br />
            <h2 className='movie-heads'>Phase 2</h2>
            <div className='movies-list phase2'>
                {phase2.map((article, index) => (
                    <MovieCard
                        key={index}
                        image={article.image}
                        title={article.title}
                        description={article.description}
                        hoverText={article.hoverText}
                        movieURL={article.movieURL}
                    />
                ))}
            </div>

            <br />
            <hr />
            <br />
            <br />
            <h2 className='movie-heads'>Phase 3</h2>
            <div className='movies-list phase3'>
                {phase3.map((article, index) => (
                    <MovieCard
                        key={index}
                        image={article.image}
                        title={article.title}
                        description={article.description}
                        hoverText={article.hoverText}
                        movieURL={article.movieURL}
                    />
                ))}
            </div>

            <br />
            <hr />
            <br />
            <br />
            <h2 className='movie-heads'>Phase 4</h2>
            <div className='movies-list phase4'>
                {phase4.map((article, index) => (
                    <MovieCard
                        key={index}
                        image={article.image}
                        title={article.title}
                        description={article.description}
                        hoverText={article.hoverText}
                        movieURL={article.movieURL}
                    />
                ))}
            </div>

            <br />
            <hr />
            <br />
            <br />
            <h2 className='movie-heads'>Phase 5</h2>
            <div className='movies-list phase5'>
                {phase5.map((article, index) => (
                    <MovieCard
                        key={index}
                        image={article.image}
                        title={article.title}
                        description={article.description}
                        hoverText={article.hoverText}
                        movieURL={article.movieURL}
                    />
                ))}
            </div>
        </div>
    )
}

export default MovieList
