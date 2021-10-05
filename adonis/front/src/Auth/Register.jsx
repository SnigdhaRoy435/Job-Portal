import React, { Component, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import '../style.css';
//import { register } from '../components/Userfunction';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


const Register = () => {
    // const [username, setUsername] = useState();
    //const [email, setEmail] = useState();
    //const [password, setPassword] = useState();

    const history = useHistory();

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',

    })
    const [message, setMessage] = useState();

    const changeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setUser((preValue) => {
            return {
                ...preValue,
                [name]: value

            }

        });
        console.log(user);

    }


    const submitHandler = (e) => {
        e.preventDefault();

        console.log();
        axios.post(`http://127.0.0.1:3333/register`, user)
            .then(response => {
                console.log(response);
                setMessage("Your have successfully registered!!!. Please Login now");
                alert('You have successfully registered');
                //history.push('/login');
                history.push('/login');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>

            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h2 className="text-center text-success">Register and Get Started to Explore Job</h2>

                        <div className="card shadow mt-5">
                            <div className="card-body mb-2">
                                <form className="form-group" onSubmit={submitHandler}>
                                    <p className="text-success">{message}</p>
                                    <div>
                                        <label htmFor="username">Enter Your Full Name</label>

                                        <input type="text"
                                            name="username"
                                            value={user.username}
                                            placeholder="Snigdha Roy Barman"
                                            onChange={changeHandler}
                                            className="form-control"
                                        />

                                    </div>

                                    <div className="mt-3">
                                        <label htmFor="email">Enter Your Email Address</label>

                                        <input type="email"
                                            name="email"
                                            value={user.email}
                                            placeholder="abcd@gmail.com"
                                            onChange={changeHandler}
                                            className="form-control"
                                        />

                                    </div>

                                    <div className="mt-3">
                                        <label htmFor="password">Enter Your Password</label>
                                        <input type="password"
                                            name="password"
                                            value={user.password}
                                            placeholder="********"
                                            onChange={changeHandler}
                                            className="form-control"
                                        />

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <button type="submit" className="btn btn-outline-success mt-3 ml-auto">Register Now</button>
                                        </div>
                                        <div className="col-md-6 mt-4">
                                            <span>Already had an account? </span>
                                            <Link to="/login" className="text-primary mt-3 mr-auto">Login Now</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


/*class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }

    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        axios.post(`http://127.0.0.1:3333/register`, this.state)
            .then(response => {
                console.log(response);
                alert('You have successfully registered');
                this.props.history.push('/login')
            })
            .catch(error => {
                console.log(error);
            })
        // register(newUser).then(res => {
        // this.props.history.push('/login');
        //})
    }

    render() {
        const { username, email, password } = this.state;

        return (
            <>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1 className="text-center">Register Here</h1>
                            <div className="card">
                                <div className="card-body mb-2">
                                    <form className="form-group" onSubmit={this.submitHandler}>

                                        <label for="username">User Name</label>
                                        <input type="text" name="username" value={username} placeholder="Enter Your Name" className="form-control" onChange={this.changeHandler} />

                                        <label for="email">Email</label>
                                        <input type="email" name="email" value={email} placeholder="Enter Your E-mail Address" className="form-control" onChange={this.changeHandler} />

                                        <label for="password">Password</label>
                                        <input type="password" name="password" value={password} placeholder="Enter Your Password" className="form-control" onChange={this.changeHandler} />

                                        <button type="submit" className="btn btn-success mt-2">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    /*constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            error: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
            this.props.history.push('/login');
        })
    }
    render() {

        return (
            <>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1 className="text-center">Register Here</h1>
                            <div className="card">
                                <div className="card-body mb-2">
                                    <form className="form-group" onSubmit={this.onSubmit}>

                                        <label htmlFor="username">User Name</label>
                                        <input type="text" name="username" value={this.state.username} placeholder="Enter Your Name" className="form-control" onChange={this.onChange} />

                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" value={this.state.email} placeholder="Enter Your E-mail Address" className="form-control" onChange={this.onChange} />

                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" value={this.state.password} placeholder="Enter Your Password" className="form-control" onChange={this.onChange} />

                                        <button type="submit" className="btn btn-success mt-2">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}*/

export default Register;