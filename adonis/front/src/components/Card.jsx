import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import Image from '../images/boss2(1).jpg';


const Card = (props) => {
    //const { applyId } = match;

    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img className="card-img-top img-fluid" src={process.env.PUBLIC_URL + "/uploads/" + props.image} alt="Card image cap" style={{ "height": 250 }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h5 className="card-title"></h5>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text">{props.name}</p>
                        <p className="card-text text-success">Required Qualification:- {props.qualification}</p>
                        <p className="card-text text-warning">Required Experience:- {props.experience}</p>

                        <Link to={`/apply/${props.id}/${props.user_id}`} className="btn btn-primary">Apply</Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Card;