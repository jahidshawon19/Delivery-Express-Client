import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import LoadServices from './LoadServices/LoadServices';
import ServiceAbout from './ServiceAbout/ServiceAbout';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <LoadServices></LoadServices>
            <ServiceAbout></ServiceAbout>
            <Footer></Footer>
        </div>
    );
};

export default Home;