import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"

const Show = ({ match }) => {
    //This params takes the current page id
    const { params: { showId } } = match; //here showId is taken from app.js Route Link
    const [apply, setApply] = useState([]);

    useEffect(() => {
        async function getData() {
            //here we get the value of current page Id using axios
            const res = await axios.get(`/applyjob/${showId}`);
            console.log(res.data)
            setApply(res.data.apply)
        }
        getData();
    }, [])
    return (
        <>
            <h1>The Job You Applied</h1>
            <Link to={`/admin/jobs/${showId}`}>Back</Link>
            <div>
                {
                    //used map method to display the id for this particular page 
                    apply.map((app) => {
                        return (
                            <div>
                                <h3>{app.title}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Show;