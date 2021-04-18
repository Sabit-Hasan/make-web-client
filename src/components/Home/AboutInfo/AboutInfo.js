import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../../images/photo-1542744094-3a31f272c490.jpg';
import './AboutInfo.css'

const AboutInfo = () => {
    return (
        <div>
            <div className="row pt-5 pb-5 about-section">
                <div className="col-md-6 offset-md-1 mr-3">
                    <div className="custom-container">
                        <img className="rounded" src={aboutImg} alt="" style={{width: '100%'}}/>
                        <div className="overlay">
                            <div className="text">
                                <Link to="/contactUs"></Link><button className="btn btn-outline-warning">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div>
                    <h3>About Us</h3>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum eius consequatur error totam, esse deleniti! Mollitia distinctio voluptatum culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem sed delectus libero eligendi? Consectetur recusandae quaerat, delectus iusto earum totam!</h6>
                    <h6><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam eos nostrum vero amet architecto. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quia assumenda porro facere eligendi vero. Ipsa, quos. Facere, voluptatibus quas?</small></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutInfo;