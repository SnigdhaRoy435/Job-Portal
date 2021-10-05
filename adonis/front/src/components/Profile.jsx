import React, { Component, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
//import { getUser } from './Userfunction'

/*class Profile extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        getUser(decoded.uid).then(res => {

            this.setState({
                username: res.data.username,
                email: res.data.email,

            })


            console.log(this.state.username)
        })
    }

    render() {
        return (
            <div>
                <h1>Profile</h1>

                <p>{this.state.username}</p>
                <p>{this.state.email}</p>
            </div>
        )
    }

}*/
const Profile = ({ match }) => {
    const [users, setUser] = useState([])
    //const [person, setPerson] = useState([]);

    const { params: { userId } } = match;
    /* useEffect(() => {
         async function getData() {
             const res = await axios.get(`/register/${userId}`);
             //console.log(res.data)
             setPerson(res)
             //setCount(res.data.moves.length)
 
         }
 
         getData();
 
     }, [])*/

    const getUser = (id) => {

        //console.log(userId)

        return axios.get(`/register/${id}`)
            .then(res => {
                return res;
            })
            .catch(err => {
                return err;
            })
    }

    useEffect(() => {
        function getData() {
            const token = localStorage.usertoken;
            // const id = localStorage.id;
            const decoded = jwt_decode(token)
            getUser(decoded.uid).then(res => {
                console.log(decoded)
                //const data = res.data.user;
                setUser(res.data.user);

                //console.log(res.data.user)

            })

        }

        getData();

    }, [])



    return (
        <>
            <h1>Profile</h1>
            {
                users.map((user, index) => {
                    return (
                        <div key={index}>
                            <h1>Welcome to Unigrasp</h1>
                            <h2 className="text-success">{user.username}</h2>
                        </div>

                    )
                })
            }

        </>
    )
}
export default Profile;