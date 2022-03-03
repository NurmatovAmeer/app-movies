import React from 'react';

function Movie(props) {
        const {Poster, Type, Title, Year, imdbID}  = props;
    console.log(props);
    return (
        <div className="col-5 ml-5 d-flex border my-5">
            <div className="photo">
                <img src={Poster} alt="Error"/>
            </div>
            <div className="titles">
                <h3 className="text-primary">{Title}</h3>
                <br/>
                <p>{Year}</p>
                <hr/>
                <p>{Type}</p>
            </div>
        </div>
    );
}

export default Movie;
