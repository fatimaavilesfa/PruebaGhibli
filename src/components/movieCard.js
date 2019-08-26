import React from 'react';

const MovieCard = (props) => {
    return (
        <div>
            <div>
                <div className="card" style={{ "width": "100%" }}>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.producer}, {props.date}</h6>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;