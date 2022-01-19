import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const {serviceId} = useParams()
    const [service, setService] = useState({})

    useEffect(()=>{
        const url =  `https://powerful-badlands-74288.herokuapp.com/service/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    })

    return (
        <>
            <Navbar></Navbar>

            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-6">
                    <div class="card">
                    <img class="card-img-top serviceDetailsImg" src={service.photoUrl} alt="Card image cap" />
                    
                    </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                            <h2 class="card-title">{service.serviceName}</h2>
                        <p class="card-text">{service.shortDescription}</p>
                        <Link to='/booking' class="btn btn-danger">Place Order Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetails;