//import React, { useEffect } from 'react';
//import { useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';

/*export const register = newUser => {

    return axios.post(`/register`, {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password
    })
        .then(res => {
            console.log('Registered');
        })

}*/

/*const login = () => {

    const history = useHistory();

    useEffect(() => {
        function getData(user) {
            axios.post(`/login`, {
                email: user.email,
                password: user.password
            })
                .then(res => {
                    localStorage.setItem('usertoken', res.data.token)
                    return res;
                    //console.log(res)
                })
                .catch(error => {
                    console.log('Invalid user and password' + error);
                    //alert('Your Email or Password is not correct');
                    //browseHistory.push('/login')
                    function back() {
                        history.push("/")
                    }
                    back();

                })
        }
        getData();

    })

}

export { login }*/

export const getUser = id => {
    return axios.get(`/register/${id}`)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
}
