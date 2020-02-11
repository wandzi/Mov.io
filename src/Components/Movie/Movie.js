import React from 'react';
import './Movie.scss';

const Movie = () => {
    return(
        <div className="movie">
            <img src="https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg" alt="poster" className="poster"/>
            <div className="movie-description">
                <h1 className="title">Rambo</h1>
                <h2 className="year">2012</h2>
                <div className="rating">
                    <span>7.0/10</span>
                </div>
            </div>
        </div>
    );
}

export default Movie