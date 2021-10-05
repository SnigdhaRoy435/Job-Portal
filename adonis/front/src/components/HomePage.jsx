import React, { useReducer, useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const HomePage = () => {

    const [jobs, setJob] = useState([]);
    //const [apply, setApply] =useState([]);

    useEffect(() => {
        function getData() {
            axios.get('http://127.0.0.1:3333/postjob').then((res) => {
                setJob(res.data.job)
            })
        }

        getData();
    }, [])

    return (
        <>
            <h1>Home Page</h1>
            <div className="container-fluid mb-5">

                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">

                            {
                                jobs.map((job, index) => {
                                    return <Card
                                        key={index}
                                        user_id={job.user_id}
                                        id={job.id}
                                        image={job.image}
                                        title={job.title}
                                        description={job.description}
                                        qualification={job.qualification}
                                        experience={job.experience}

                                    />
                                })
                            }

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomePage;