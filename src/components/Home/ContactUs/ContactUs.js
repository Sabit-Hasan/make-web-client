import React from 'react';
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center mt-5 pt-5">
                <h3 className="title-style">Contact Us</h3>
            </div>
            <div className="custom-form mt-5 pt-5">
            <form>
                First Name: <input type="text" name="fname" placeholder="First Name" required/>
                <br/><br/>
                Last Name: <input type="text" name="lname" placeholder="Last Name" required/>
                <br/><br/>
                Email: <input type="email" name="email" placeholder="Email" required />
                <br/><br/>
                Write Something: <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>
                <input className="btn btn-warning" type="submit" value="Submit"/>
            </form>
        </div>
        </div>
    );
};

export default ContactUs;