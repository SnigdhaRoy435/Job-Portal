import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import "../style.css";
//import { Link } from "react-router-dom";

//import DatePicker from "react-datepicker";
//import moment from "moment";

import axios from "axios";

class PostJob extends Component {
    constructor({ props, match }) {
        const { postId } = match;
        // console.log(postId);
        super(props);
        this.state = {
            user_id: '',
            title: '',
            description: '',
            qualification: '',
            experience: '',
            image: '',
            message: ''
        };
        //this.handleChange = this.handleChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.fileSelectHandler = this.fileSelectHandler.bind(this);
    }



    fileSelectHandler = event => {
        this.setState({
            image: event.target.files[0]
        });
    };

    onChange(e) {
        switch (e.target.name) {
            case "image":
                this.setState({ image: e.target.files[0] });
                break;
            default:
                this.setState({ [e.target.name]: e.target.value });
        }

    }

    componentDidMount() {

        if (localStorage.usertoken) {
            const getUser = (id) => {

                //console.log(userId)

                return axios.get(`/register/${id}`)
                    .then(res => {
                        //setUser(res.data.user)
                        //const data = res.data.user
                        this.setState({
                            user_id: id
                        })
                        console.log(id)
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

                    return res;
                    //setUser(res.data.user);

                })

            }

            getData();

        }

    }

    onSubmit(e) {
        e.preventDefault();
        const { image } = this.state;
        const bodyFormData = new FormData();

        bodyFormData.append("image", image);

        // bodyFormData.append("post", post);

        bodyFormData.append("user_id", this.state.user_id);
        bodyFormData.append("title", this.state.title);
        bodyFormData.append("description", this.state.description);
        bodyFormData.append("qualification", this.state.qualification);
        bodyFormData.append("experience", this.state.experience);
        //bodyFormData.append("message", this.state.message);

        const newUser = {
            user_id: this.state.user_id,
            title: this.state.title,
            description: this.state.description,
            qualification: this.state.qualification,
            experience: this.state.experience,
            //message: "submitte"
            //dateofbirth: document.getElementById("date").value
        };
        console.log(this.state.message)
        async function store() {
            await axios
                .post(`http://127.0.0.1:3333/postjob`, bodyFormData, newUser, {
                    headers: {
                        'NEEDS-AUTH': true,
                        accept: "application/json",
                        "Accept-Language": "en-US,en;q=0.8"
                    }
                })
                .then((res) => {
                    console.log(res.data);
                    alert("your post has been successfully one");
                    this.props.history.push("/");
                    //browseHistory.push('/')

                })
                .catch(err => console.log(err));
        }
        store();

        console.log(bodyFormData);
    }

    render() {
        return (
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-md-8">

                        <h2 className="text-center text-success">Post Your Job & Choose The Best Candidate for Your Company</h2>

                    </div>
                    <div className="card shadow mt-3">
                        <div className="card-body mb-2">
                            <form onSubmit={this.onSubmit} encType="multipart/form-data" method="POST">
                                <p>{this.state.message}</p>
                                <div className="form-group">
                                    <input
                                        className="form-control turnoff"
                                        type="text"
                                        name="user_id"
                                        id="title"
                                        placeholder={this.state.user_id}
                                        value={this.state.user_id}
                                        onChange={this.onChange}
                                        disabled="true"


                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Job Title</label>
                                    <input
                                        className="form-control "
                                        type="text"
                                        name="title"
                                        id="title"
                                        placeholder="Eg:- FullStack Engineer"
                                        value={this.state.title}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description" className="mt-2">Job Description</label>
                                    <textarea
                                        className="form-control mt-2"
                                        type="text"
                                        name="description"
                                        id="description"
                                        placeholder="Eg: I want to higher a fullstack engineer for my backend office..... "
                                        value={this.state.description}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="qualification" className="mt-2">Required Qualification</label>

                                    <select name="qualification" value={this.state.qualification} onChange={this.onChange} className="form-control mt-2">
                                        <option value="">Click to Select your required qualification</option>
                                        <option value="bca">BCA</option>
                                        <option value="mca">MCA</option>
                                        <option value="software">Software Engineer</option>
                                        <option value="hardware">Hardware Engineer</option>
                                        <option value="bank-manager">Bank Manager</option>
                                    </select>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="experience" className="mt-2">Required Experience</label>

                                    <select name="experience" value={this.state.experience} onChange={this.onChange} className="ml-2 mt-2">
                                        <option value="">Select Experience</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>



                                <div className="form-group">

                                    <div className=" mt-2">
                                        <input
                                            type="file"
                                            ref="files"
                                            id="uploadBtn"
                                            name="image"
                                            onChange={this.onChange}
                                        />
                                    </div>


                                </div>
                                <button type="submit" className="btn btn-outline-success mt-3 ml-auto">post</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default PostJob;

