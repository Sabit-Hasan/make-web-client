import React, { useEffect, useState } from 'react';
import profile1 from '../../../images/awar-kurdish-2oVwN9LVIrw-unsplash.jpg';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Testimonials.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://floating-brushlands-99076.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className="container mt-5 pt-3">
            <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
                <div className="title-style">
                    <h3>Testimonials</h3>
                </div>
            </div>
            <div className="container">
            <div>
                <div className="row d-flex justify-content-center">
                    {
                        reviews.map(review => <ReviewCard review={review} key={review._id}></ReviewCard>)
                    }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Testimonials;