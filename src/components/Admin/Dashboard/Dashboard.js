import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { faTasks, faPlus, faPen, faUserPlus, faCreditCard, faStarHalfAlt, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '../../../App';

const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=>{
        fetch('https://floating-brushlands-99076.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    },[])

    return (
        <div>
            <div class="sidenav">

                <h3 style={{color:'white', fontSize:'14px', textAlign:'center'}}>User: {loggedInUser.name || loggedInUser.email}</h3>
                
                    {
                        isAdmin && 
                        <div>
                            <Link className="remove-underline" to="/orderList"><FontAwesomeIcon style={{fontSize:'18px'}} icon={faTasks} /><span style={{fontSize:'20px'}}> Order List</span></Link>

                            <Link className="remove-underline" to="/addServices"><FontAwesomeIcon style={{fontSize:'18px'}} icon={faPlus} /><span style={{fontSize:'20px'}}> Add Services</span></Link>

                            <Link className="remove-underline" to="/addAdmin"><FontAwesomeIcon style={{fontSize:'18px'}} icon={faUserPlus} /><span style={{fontSize:'20px'}}> Add Admin</span></Link>

                            <Link className="remove-underline" to="/manage"><FontAwesomeIcon style={{fontSize:'18px'}} icon={faAlignLeft} /><span style={{fontSize:'20px'}}> Manage</span></Link>
                        </div>
                    }
                
                <Link className="remove-underline" to="/book"><FontAwesomeIcon style={{fontSize:'18px'}} icon={faCreditCard} /><span style={{fontSize:'20px'}}> Book</span></Link>

                <Link className="remove-underline" to="/booking"><FontAwesomeIcon style={{fontSize:'18px'}} icon={faTasks} /><span style={{fontSize:'20px'}}> Booking List</span></Link>

                <Link className="remove-underline" to="/review"><FontAwesomeIcon style={{fontSize:'18px'}} icon={faStarHalfAlt} /><span style={{fontSize:'20px'}}> Review</span></Link>

                <Link className="remove-underline" to="/home">
                    <div className="go-back-div">
                        <span style={{fontSize:'20px'}}>Go Back</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;