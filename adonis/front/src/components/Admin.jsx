import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminCard from '../components/AdminCard'
import '../style.css'
import { Link } from 'react-router-dom'
//import upload from '../uploads'
import jwt_decode from 'jwt-decode';

const Admin = ({ match }) => {
    const { params: { postedId } } = match;

    const [jobs, setJob] = useState([]);
    const [msg, setMsg] = useState()


    useEffect(() => {

        if (localStorage.usertoken) {
            const getUser = (id) => {

                //console.log(userId)

                //using axios method and id mention above to get the current page Id

                return axios.get(`/postjob/${id}`)
                    .then(res => {
                        //setUser(res.data.user)

                        return res;
                    })
                    .catch(err => {
                        return err;
                    })
            }


            function getData() {
                const token = localStorage.usertoken;
                // const id = localStorage.id;
                const decoded = jwt_decode(token)
                getUser(decoded.uid).then(res => {
                    //console.log(decoded)
                    setMsg("You have successfully Logged In")
                    setJob(res.data.jobs);

                })

            }

            getData();

        }

    }, [])

    console.log(jobs)

    return (
        <>
            <p className="text-success text-center mt-1 shadowTxt"><b>{msg}</b></p>

            <div className="container">
                <div className="row">
                    <div className="apply shadow">
                        <Link className="nav-link mr-2" to={`/details/${postedId}`}>Candidates Profile</Link>
                    </div>
                    <div className="apply2 shadow">
                        <Link className="nav-link mr-2" to={`/show/${postedId}`}>Job Applied</Link>
                    </div>
                </div>
            </div>

            <div className="my-2 mb-2">
                <h1 className="text-center">Admin Page</h1>
                <h3 className="text-center">The Jobs you have posted</h3>
            </div>

            <div className="container-fluid mb-5">

                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">

                            {
                                jobs.map((job, index) => {
                                    return <AdminCard
                                        key={index}
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
    );

}

export default Admin;