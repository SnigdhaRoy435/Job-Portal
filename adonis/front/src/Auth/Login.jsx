import React, { useState, useEffect } from 'react';
//import jwt_decode from 'jwt-decode';
import axios from 'axios';
//import { login } from '../components/Userfunction';
import { useHistory } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

const Login = ({ match }) => {

    const { params: { Id } } = match;
    // const [username, setUsername] = useState();
    //const [email, setEmail] = useState();
    //const [password, setPassword] = useState();

    const history = useHistory();

    const [user, setUser] = useState({

        email: '',
        password: '',

    })


    const onChange = (e) => {
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

    const onSubmit = (e) => {
        e.preventDefault();

        console.log();


        function getData() {
            //const [person, setPerson] = useState();
            axios.post(`http://127.0.0.1:3333/login`, user)
                .then(res => {
                    localStorage.setItem('usertoken', res.data.token);
                    //localStorage.setItem('id', res.data.users);
                    //return res;
                    history.push(`/`);
                    window.location.reload(false);

                    //console.log(res)
                })
                .catch(error => {
                    console.log('Invalid user and password' + error);
                    alert('Your Email or Password is not correct');
                    //browseHistory.push('/login')

                    history.push('/login-error')

                })
        }
        getData();

    }

    /*const refreshPage = () => {
        window.location.reload(false)
    }*/

    return (
        <>

            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h2 className="text-center text-primary mt-2">Login Now</h2>
                        <div className="card shadow mt-4">
                            <div className="card-body mb-2">
                                <form className="form-group" onSubmit={onSubmit}>

                                    <div>

                                        <label htmlFor="email" className="text-primary">E-mail Address</label>

                                        <input type="email"
                                            name="email"
                                            value={user.email}
                                            placeholder="abcd@gmail.com"
                                            className="form-control"
                                            onChange={onChange}
                                        />

                                    </div>

                                    <div className="mt-3">

                                        <label htmlFor="password" className="text-primary">Password</label>

                                        <input type="password"
                                            name="password"
                                            value={user.password}
                                            placeholder="********"
                                            className="form-control"
                                            onChange={onChange}
                                        />

                                    </div>

                                    <button type="submit" className="btn btn-outline-primary mt-3">Login Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
/*class Login extends Component {

    constructor() {
        super()
        this.state = {

            email: '',
            password: '',
            error: 'Wrong password'

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

            email: this.state.email,
            password: this.state.password,
            error: this.state.error
        }

        login(newUser).then(res => {
            this.props.history.push('/dashboard');

        }).catch(err => {
            const e = this.state.error
            console.log(e);
        })

    }
    render() {

        return (
            <>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h2 className="text-center text-primary mt-2">Login Now</h2>
                            <div className="mt-4">
                                <div className="card-body mb-2">
                                    <form className="form-group" onSubmit={this.onSubmit}>

                                        <div>

                                            <label htmlFor="email" className="text-primary">Enter Your E-mail Address</label>

                                            <input type="email"
                                                name="email"
                                                value={this.state.email}
                                                placeholder="abcd@gmail.com"
                                                className="form-control"
                                                onChange={this.onChange}
                                            />

                                        </div>

                                        <div className="mt-3">

                                            <label htmlFor="password" className="text-primary">Enter Your Password</label>

                                            <input type="password"
                                                name="password"
                                                value={this.state.password}
                                                placeholder="********"
                                                className="form-control"
                                                onChange={this.onChange}
                                            />

                                        </div>

                                        <button type="submit" className="btn btn-outline-primary mt-3">Login Now</button>
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

export default Login;