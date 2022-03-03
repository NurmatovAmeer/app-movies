import React from 'react';
import Movie from "./Movie";

function Movies(props) {

    const {movies = []} = props;
    console.log(props);
    return (
        <div className="container">
            <div className="row">
                {movies.map((movie) => {
                    return(
                        <Movie key={movie.imdbID} {...movie}/>
                    )
                })}
            </div>
        </div>
    );
}

export default Movies;

