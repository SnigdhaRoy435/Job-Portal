import React, { Component, useState, useEffect } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';


const Header = () => {

    const history = useHistory()

    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        history.push('/')
    }

    const [users, setUser] = useState([]);
    //const [person, setPerson] = useState([]);


    useEffect(() => {
        if (localStorage.usertoken) {
            const getUser = (id) => {

                //console.log(userId)

                return axios.get(`/register/${id}`)
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

                    setUser(res.data.user);

                })

            }

            getData();

        }

    }, [])


    const loginRegLink = (


        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                        <Link className="nav-link mr-2" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/register">Register</Link>
                    </li>

                </ul>

            </div>
        </nav>

    )

    const userLink = (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">

                        {
                            users.map((user, index) => {
                                //console.log(user.username)
                                return (
                                    <>
                                        <Link className="nav-link mr-2" to={`/admin/${user.id}/dashboard`} key={index}>
                                            <li className="nav-item">{user.username}</li>
                                        </Link>

                                    </>
                                )
                            })
                        }


                        {
                            users.map((user, index) => {
                                //console.log(user.username)
                                return (
                                    <>
                                        <Link className="nav-link mr-2" to={`/admin/${user.id}/postjob`} key={index}>
                                            <li className="nav-item">PostJob</li>
                                        </Link>

                                    </>
                                )
                            })
                        }

                        {
                            users.map((user, index) => {
                                //console.log(user.username)
                                return (
                                    <>
                                        <Link className="nav-link mr-2" to={`/admin/jobs/${user.id}`} key={index}>
                                            <li className="nav-item">Admin</li>
                                        </Link>

                                    </>
                                )
                            })
                        }



                        <li className="nav-item">
                            <Link className="nav-link mr-5" to="/logout" onClick={logOut}>Logout</Link>
                        </li>


                    </ul>

                </div>
            </nav>

        </>
    )

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand ml-5" to="/">Navbar</Link>
            <button className="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mt-2 mr-2" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mt-2 mr-2" to="/about">About</Link>
                    </li>

                    {localStorage.usertoken ? userLink : loginRegLink}
                </ul>

            </div>
        </nav>

    )




}

export default withRouter(Header);