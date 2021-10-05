import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import DetailCard from './DetailCard';
//import jwt_decode from 'jwt-decode';

const Detail = ({ match }) => {
    const { params: { detailId } } = match;
    //console.log(detailId)
    // const [jobs, setJob] = useState([]);
    const [apply, setApply] = useState([]);


    useEffect(() => {
        async function getData() {
            const res = await axios.get(`/appUser/${detailId}`);
            console.log(res.data.userId)
            setApply(res.data.userId)

        }

        getData();

    }, [])

    return (
        <div>
            <h1>Details page</h1>

            <div className="container-fluid mb-5">
                <Link to={`/admin/jobs/${detailId}`}>Back</Link>

                <div className="row">

                    <div className="col-10 mx-auto">

                        <div className="row gy-4">
                            <br /> <h3 className="text-center">Candidate applied your job</h3><br />

                            {
                                apply.map((app, index) => {
                                    return <DetailCard
                                        key={index}
                                        name={app.name}
                                        fatherName={app.fatherName}
                                        dob={app.dob}
                                        title={app.title}
                                        biography={app.biography}

                                    />
                                })
                            }

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Detail;