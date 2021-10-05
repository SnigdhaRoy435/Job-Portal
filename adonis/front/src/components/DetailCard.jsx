import React from 'react';


const DetailCard = (props) => {
    return (
        <>
            <div className="col-md-10 col-10 mx-auto">
                <div className="card">

                    <div className="card-body">
                        <h3 className="card-title">{props.title}</h3>
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text"><b>Father Name:-</b> {props.fatherName}</p>
                        <p className="card-text"><b>Date of Birth:-</b> {props.dob}</p>
                        <p>Biography:-{props.biography} </p>
                    </div>
                </div>
            </div>

        </>
    )

}

export default DetailCard;