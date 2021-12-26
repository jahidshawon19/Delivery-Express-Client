import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import ServiceAbout from './ServiceAbout/ServiceAbout';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <ServiceAbout></ServiceAbout>
            <Footer></Footer>
        </div>
    );
};

export default Home;