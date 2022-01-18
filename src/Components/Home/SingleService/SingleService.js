import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const SingleService = (props) => {
    const {_id,serviceName, photoUrl} = props.serviceData
    return (
        <div className="col-sm-3">
        <div className="card service-card">
            <img src={photoUrl} alt="" />
            <div className="info">
                
                <h3>{serviceName}</h3>
                
                <Link to={`/service/${_id}`} className="btn btn-light text-dark">Place Order</Link>
            </div>
        </div>
    </div>
    );
};

export default SingleService;