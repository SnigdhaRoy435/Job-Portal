import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const Apply = ({ match }) => {
    const { params: { applyId, userId } } = match;

    const [user, setUser] = useState({
        user_id: '',
        job_id: '',
        name: '',
        title: '',
        fatherName: '',
        dob: '',
        app_id: '',
        yoq: '',
        qualification: '',
        experience: '',
        mobile: '',
        email: '',
        biography: '',

    })

    const [u, setU] = useState({ app_id: '' })


    const [job, setJob] = useState([]);


    const changeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setUser(preValues => {
            return {
                ...preValues,
                [name]: value
            }
        })
        setU(preValues => {
            return {
                ...preValues,
                [name]: value
            }
        })


    }

    const submitHandler = (e) => {
        e.preventDefault();

        console.log();
        axios.post(`http://127.0.0.1:3333/apply`, user, {
            headers: {
                'NEEDS-AUTH': true,
                accept: "application/json",
                "Accept-Language": "en-US,en;q=0.8"
            }
        })
            .then(response => {
                console.log(response);
                alert("Successfully Done");
            })
            .catch(err => {
                console.log(err);
            })

        //axios.post(`http://127.0.0.1:3333/apply`, job)

    }

    useEffect(() => {
        async function getData() {

            const res = await axios.get(`/register/${applyId}`);
            const res2 = await axios.get(`/postjob/${userId}`);
            // const res3 = await axios.get(`/jobs/${applyId}`);

            //console.log(res3.data)
            //const title = res2.data.jobs
            if (localStorage.usertoken) {
                const getUser = (id) => {
                    return axios.get(`/register/${id}`)
                        .then(res => {

                            console.log(id);
                            setUser({
                                job_id: applyId,
                                user_id: userId,
                                app_id: id,
                            })


                        })
                        .catch(err => {
                            return err;
                        })
                }

                function showData() {
                    const token = localStorage.usertoken;
                    const decoded = jwt_decode(token);

                    getUser(decoded.uid).then(res => {
                        return res;
                    })
                }

                showData();
            }
            //  const res3 = await axios.get(`/apply/${appId}`)
            console.log(applyId)
            console.log(userId)

        }

        //return title;


        async function display() {
            const res = await axios.get(`/jobs/${applyId}`);

            setJob(res.data.jobs)
        }


        /* async function userId() {
             const res = await axios.get(`/jobUserId/${applyId}`);
             console.log
         }*/



        display();
        getData();
    }, [])



    return (
        <>
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-md-8">

                        <h2 className="text-center text-success">Apply</h2>

                    </div>

                    <div className="card shadow mt-3">
                        <div className="card-body mb-2">
                            <form onSubmit={submitHandler} encType="multipart/form-data" method="POST">

                                {//<h5>You apply Id is:- {user.app_id}</h5>
                                }

                                {
                                    job.map((u, index) => {
                                        return <div key={index}>
                                            <h1>{u.title}</h1>
                                        </div>
                                    })
                                }

                                <div className="form-group">

                                    <input
                                        className="form-control turnoff"
                                        type="text"
                                        name={user.user_id}
                                        id="user_id"
                                        placeholder={user.user_id}
                                        value={user.user_id}
                                        onChange={changeHandler}
                                        disabled="true"
                                    />
                                </div>


                                <div className="form-group">

                                    <input
                                        className="form-control turnoff"
                                        type="text"
                                        name="job_id"
                                        id="job_id"
                                        placeholder={user.job_id}
                                        value={user.job_id}
                                        onChange={changeHandler}
                                        disabled="true"
                                    />
                                </div>
                                <div className="form-group">

                                    <input
                                        className="form-control turnoff"
                                        type="text"
                                        id="app_id"
                                        name="app_id"
                                        placeholder="Put you apply Id given above."
                                        value={user.app_id}
                                        onChange={changeHandler}
                                        disabled="true"

                                    />
                                </div>

                                <div>
                                    <label htmlFor="title">Enter your Name</label>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={user.name}
                                            onChange={changeHandler}

                                        />
                                    </div>

                                </div>

                                <div>
                                    <label htmlFor="title">Enter your Father Name</label>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="fatherName"
                                            name="fatherName"
                                            placeholder="Enter your father's name."
                                            value={user.fatherName}
                                            onChange={changeHandler}

                                        />
                                    </div>

                                </div>

                                <div>
                                    <label htmlFor="title">Enter your Date of Birth</label>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="dob"
                                            name="dob"
                                            placeholder="Enter your Date of birth"
                                            value={user.dob}
                                            onChange={changeHandler}

                                        />
                                    </div>

                                </div>

                                <div>
                                    <label htmlFor="title">Enter your Job Title mentioned above:-</label>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="title"
                                            name="title"
                                            placeholder="Put you job title given above."
                                            value={user.title}
                                            onChange={changeHandler}

                                        />
                                    </div>

                                </div>

                                <div>
                                    <label htmlFor="title">Enter your year of qualification</label>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="number"
                                            id="yoq"
                                            name="yoq"
                                            placeholder="Eg:- 2019"
                                            value={user.yoq}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>


                                <div>
                                    <label htmlFor="title">Enter your qualification</label>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="qualification"
                                            name="qualification"
                                            placeholder="Eg:- Graduate in Science"
                                            value={user.qualification}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="title">Enter your Experience</label>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="experience"
                                            name="experience"
                                            placeholder="Eg:- 3 years in IT sector"
                                            value={user.experience}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="title">Enter your Mobile Number</label>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="mobile"
                                            name="mobile"
                                            placeholder="Eg:- 7679879706"
                                            value={user.mobile}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="title">Enter your Email Address</label>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Eg:- unigrasp17@gmail.com"
                                            value={user.email}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="title">Enter your Details</label>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            type="text"
                                            id="biography"
                                            name="biography"
                                            placeholder="Eg:- unigrasp17@gmail.com"
                                            value={user.biography}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>


                                <button type="submit" className="btn btn-outline-success mt-3 ml-auto">Apply</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Apply;