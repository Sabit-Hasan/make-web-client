import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/Untitled design.png'

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const signOut = (user) =>{
        setLoggedInUser(user);
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" class="navbar-brand"><img src={logo} alt=""/> MAKE-WEB</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link to="/home" class="nav-link">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/dashboard" class="nav-link">Dashboard</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/contactUs" class="nav-link">Contact Us</Link>
                    </li>
                    <li class="nav-item">
                    {
                                loggedInUser.email ? 
                                <div className="row d-flex justify-content-between">
                                    <div className="col-7 mt-2">
                                            <div>
                                                <h6><img src={loggedInUser.photo} style={{width: '25px', borderRadius:'50%'}}/>{loggedInUser.name}</h6>
                                            </div>
                                    </div>
                                    <div className="col-5 mt-1">
                                            <div>
                                                <button className="btn btn-outline-warning" onClick={signOut} style={{width:'100px', height:'40px'}}> Log Out</button>
                                            </div>
                                    </div>
                                </div>
                                 : <Link to="/login"><button className="btn btn-outline-warning"style={{width:'100px', height:'40px'}}>
                                Login</button></Link>
                            }
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;