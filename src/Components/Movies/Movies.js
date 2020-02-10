import React from 'react';
import './Movies.scss';
import Movie from '../Movie/Movie'

const Movies = () => {
    return(
        <div className="movies-container">
            <Movie />
            <Movie />
            <Movie />
        </div>
    ); 
}

export default Movies