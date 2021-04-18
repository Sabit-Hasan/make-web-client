import React from 'react';
import InsideHeader from '../InsideHeader/InsideHeader';
import Navbar from '../Navbar/Navbar';
import "./Header.css"

const Header = () => {
    return (
        <div className="header-background">
            <Navbar />
            <InsideHeader />
        </div>
    );
};

export default Header;