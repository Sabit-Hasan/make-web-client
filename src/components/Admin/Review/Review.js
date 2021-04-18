import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Dashboard from '../Dashboard/Dashboard';



const Review = () => {
    const [review, setReview] = useState({});

    const handleChange = (e) =>{
        const newReview = {...review};
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }
    const handleSubmit = data => {

        data.preventDefault();

        const url = 'https://floating-brushlands-99076.herokuapp.com/addReviews';

        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(result => console.log('server side response',result))
    };
    return (
        <div>
            <div>
                <Dashboard></Dashboard>
                <div className="d-flex justify-content-center align-items-center">
                    <h3 className="title-style mt-2 mb-5">Add Your Review</h3>
                </div>
            </div>
            <div style={{width:'40'}} className="d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
                Name <br/>
                <input type="text" name="name" placeholder="Name." onChange={handleChange} required/>
                <br/>
                Write Something: <textarea name="textarea" placeholder="Write something.." style={{height:'200px'}} onChange={handleChange} required></textarea>

                
                <input type="submit" />
            </form>
            </div>
            
        </div>
    );
};

export default Review;