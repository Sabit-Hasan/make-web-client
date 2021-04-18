import React, { useEffect, useState } from 'react';
import Book from '../../Admin/Book/Book';
import ServiceCard from '../ServiceCard/ServiceCard';
import './ServiceInfo.css';

const ServiceInfo = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://floating-brushlands-99076.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="container mt-5 mb-3 pt-5">
            <div className="d-flex justify-content-center align-items-center">
                <h2 className="title-style">Service Information</h2>
            </div>
            <div>
                <div className="row d-flex justify-content-center mt-5 mb-5 pb-5">
                    {
                        services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;