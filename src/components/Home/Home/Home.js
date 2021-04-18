import React from 'react';

import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import SideIconBar from '../SideIconBar/SideIconBar';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <ServiceInfo />
            <SideIconBar />
            <AboutUs />
            <Testimonials />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;