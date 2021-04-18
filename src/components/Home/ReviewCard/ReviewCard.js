import React from 'react';
import profilePic from '../../../images/man.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = (props) => {
    const {name, textarea} = props.review;
    return (
        <div class="col-md-4 card custom-card">
            <img style={{height: '220px', objectFit: 'contain'}} class="card-img-top bg-warning" src={profilePic} alt="Card image cap" />
            <div class="card-body bg-light">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{textarea}</p>
                <div class="text-warning" >
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                </div>
                
            </div>
        </div>
    );
};

export default ReviewCard;