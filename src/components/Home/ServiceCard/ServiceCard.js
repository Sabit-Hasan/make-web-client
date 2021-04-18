import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const {name, price, info, imageURL} = props.service;
    return (
        <Link style={{textDecoration: 'none', color: 'black'}} to="/book" class="col-md-4 card custom-card">
            <img style={{height: '220px', objectFit: 'contain'}} class="card-img-top bg-warning" src={imageURL} alt="Card image cap" />
            <div class="card-body bg-light">
                <h5 class="card-title">{name}</h5>
                <h6 class="card-title">{price}</h6>
                <p class="card-text">{info}</p>
            </div>
        </Link>
    );
};

export default ServiceCard;