import React from 'react';
import './SideIconBar.css';
import facebook from '../../../images/facebook.png';
import twitter from '../../../images/twitter.png';
import linkedin from '../../../images/linkedin.png';
import youtube from '../../../images/youtube.png';

const SideIconBar = () => {
    return (
        <div>
            <div id="mySidenav" class="icon-bar">
                <a href="#" id="about"><img src={facebook} alt=""/> Facebook</a>
                <a href="#" id="blog"><img src={twitter} alt=""/> Twitter</a>
                <a href="#" id="projects"><img src={linkedin} alt=""/>Linkedin</a>
                <a href="#" id="contact"><img src={youtube} alt=""/>Youtube</a>
            </div>
            {/* <div class="icon-bar">
                <a href="#" class="facebook"><img src={facebook} alt=""/></a> 
                <a href="#" class="twitter"><img src={twitter} alt=""/></a> 
                <a href="#" class="linkedin"><img src={linkedin} alt=""/></a>
                <a href="#" class="youtube"><img src={youtube} alt=""/></a> 
            </div> */}
        </div>
    );
};

export default SideIconBar;