import React from 'react';

function MovieDetails(props){


    return (
        <div>
            <h1>{props.movie && props.movie.title}</h1>
        </div>
    )
}

export default MovieDetails;