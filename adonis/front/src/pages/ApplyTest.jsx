import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from 'jwt-decode';

const ApplyTest = ({ match }) => {
    const { params: { applyId } } = match;

    // console.log(applyId)
    const [user, setUser] = useState({
        job_id: '',
        app_id: '',
        name: '',
        fatherName: '',
        biography: '',
        dob: ''
    })



    const changeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setUser(preValues => {
            return {
                ...preValues,
                [name]: value
            }
        })

    }


    const submitHandler = (e) => {
        e.preventDefault();

        console.log();
        axios.post(`http://127.0.0.1:3333/apply`, [{ user }], {
            headers: {
                'NEEDS-AUTH': true,
                accept: "application/json",
                "Accept-Language": "en-US,en;q=0.8"
            }
        })
            .then(response => {
                console.log(response);
                alert("you have applied successfully")
                // setMessage("Your have s!!!. Please Login now");
                //alert('You have successfully registered');
                //history.push('/login');
                // history.push('/login');

            })
            .catch(error => {
                console.log(error);
            })


    }



    useEffect(() => {
        async function getData() {
            const res = await axios.get(`/jobs/${applyId}`);
            //const request = await axios.get(`/register/$`)
            console.log(res.data.jobs);
            setUser({
                job_id: applyId,

            })

        }

        if (localStorage.usertoken) {
            const getUser = (id) => {
                return axios.get(`/register/${id}`)
                    .then(res => {
                        /*setU({
                            app_id: id
                        })*/
                        setUser({
                            app_id: id
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

        getData();
    }, [])




    return (
        <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-md-8">

                    <h2 className="text-center text-success">Apply</h2>

                </div>

                <div className="card shadow mt-3">
                    <div className="card-body mb-2">
                        <form onSubmit={submitHandler} encType="multipart/form-data" method="POST">

                            <h1>{user.job_id}</h1>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="app_id"
                                    id="app_id"
                                    placeholder={user.app_id}
                                    value={user.app_id}
                                    onChange={changeHandler}

                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    className="form-control "
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Eg:- FullStack Engineer"
                                    value={user.name}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fatherName" className="mt-2">Father Name</label>
                                <input
                                    className="form-control mt-2"
                                    type="text"
                                    name="fatherName"
                                    id="fatherName"
                                    placeholder="Eg: I want to higher a fullstack engineer for my backend office..... "
                                    value={user.fatherName}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="fatherName" className="mt-2">Date of Birth</label>
                                <input
                                    className="form-control mt-2"
                                    type="text"
                                    name="dob"
                                    id="dob"
                                    placeholder="DD/MM/YYYY"
                                    value={user.dob}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="biography" className="mt-2">Biography</label>
                                <textarea
                                    className="form-control mt-2"
                                    type="text"
                                    name="biography"
                                    id="biography"
                                    placeholder="Add your Details"
                                    value={user.biography}
                                    onChange={changeHandler}
                                />
                            </div>

                            <button type="submit" className="btn btn-outline-success mt-3 ml-auto">Apply</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ApplyTest;

/*class Apply extends Component {
    constructor({ props, match }) {
        const { params: { applyId } } = match;
        //console.log(applyId)
        super(props);
        this.state = {
            job_id: '',
            name: '',
            fatherName: '',
            image: ''
        };
        //this.handleChange = this.handleChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.fileSelectHandler = this.fileSelectHandler.bind(this);
        //this.getData = this.getData.bind(this);

        /*async function getData() {
            const res = await axios.get(`/jobs/${applyId}`);
            this.setState({
                jobs: res.data.jobs
            })
            console.log(res);
        }
        getData(); // after removing /* from above put /* beside getdata()
    }



    fileSelectHandler = event => {
        this.setState({
            image: event.target.files[0],

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

    /* async fetchData({ match }) {
         const { params: { applyId } } = match;

         const res = await axios.get(`/jobs/${applyId}`);
         console.log(res)

     }


    componentDidMount() {
        async function getData() {
            // const { params: { applyId } } = match;
            const res = await axios.get(`/jobs`)
            console.log(res);
        }
        getData();
    }


    onSubmit(e) {
        e.preventDefault();
        const { image } = this.state;
        const bodyFormData = new FormData();

        bodyFormData.append("image", image);

        // bodyFormData.append("post", post);
        bodyFormData.append("job_id", this.state.job_id);
        bodyFormData.append("name", this.state.name);
        bodyFormData.append("fatherName", this.state.fatherName);
        //bodyFormData.append("description", this.state.description);
        // bodyFormData.append("qualification", this.state.qualification);
        // bodyFormData.append("experience", this.state.experience);
        //bodyFormData.append("message", this.state.message);

        const newUser = {
            job_id: this.state.job_id,
            name: this.state.name,
            fatherName: this.state.fatherName
        };
        //console.log(this.state.message)
        async function store() {
            await axios
                .post(`http://127.0.0.1:3333/apply`, bodyFormData, newUser, {
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
        const { jobs = [] } = this.state
        return (
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-md-8">

                        <h2 className="text-center text-success">Apply</h2>

                    </div>

                    <div className="card shadow mt-3">
                        <div className="card-body mb-2">
                            <form onSubmit={this.onSubmit} encType="multipart/form-data" method="POST">
                                <div className="form-group">
                                    <label htmlFor="name">Apply Id</label>

                                    {
                                        jobs.map((job) => {
                                            return (
                                                <div>
                                                    {job.id}
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        className="form-control "
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Eg:- FullStack Engineer"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fatherName" className="mt-2">Job Father Name</label>
                                    <textarea
                                        className="form-control mt-2"
                                        type="text"
                                        name="fatherName"
                                        id="fatherName"
                                        placeholder="Eg: I want to higher a fullstack engineer for my backend office..... "
                                        value={this.state.fatherName}
                                        onChange={this.onChange}
                                    />
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
                                <button type="submit" className="btn btn-outline-success mt-3 ml-auto">Apply</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Apply;*/

