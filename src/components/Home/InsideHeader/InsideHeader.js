import React from 'react';
import headerImage from '../../../images/photo-1542744095-291d1f67b221.jpg';
import './InsideHeader.css'

const InsideHeader = () => {
    return (
        <div className="container inside-header">
            <div style={{height: '600px'}} className="row text-white d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h2>WE DESIGN YOUR <span className="text-danger">DREAM</span> <br/>
                    <span className="text-center text-white mt-5 pt-5">NOT JUST A WEBSITE</span>
                    </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, quidem molestias corrupti harum consequatur ullam?</p>
                    <button className="btn btn-outline-warning">Place Order</button>
                </div>
                <div className="col-md-6 offset-md-1">
                    <img style={{border: '1px solid gray', borderRadius: '5px'}} src={headerImage} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default InsideHeader;