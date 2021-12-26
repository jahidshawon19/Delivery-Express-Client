import React from 'react';
import as1 from '../../../img/as1.png'
import as2 from '../../../img/as2.jpg'
import as3 from '../../../img/as3.png'

const ServiceAbout = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-secondary font-weight-bold mt-5'>Shipping made easy</h1>
            <div className="row mt-5">
                <div className="col-sm-6">
                    <img src={as1} className='img-fluid' alt="" />
                </div>
                <div className="col-sm-6 mt-5 text-left">
                    <h2 className='font-weight-bold'>Schedule a pickup</h2>
                    <p className='lead'>Set your pickup and drop location</p>
                    <p className='lead'>Tell us the package weight (max 10 kg)</p>
                    <p className='lead'>Pay online to auto schedule the pickup of your package</p>
                </div>
            </div>

            <div className="row mt-2">
      
                <div className="col-sm-6 mt-5 text-right">
                    <h2 className='font-weight-bold'>Doorstep Pickup</h2>
                    <p className='lead'>Enjoy a free pickup from the comfort of your home</p>
                    <p className='lead'>Handover the package to the delivery executive and plan the perfect delivery</p>
                    
                </div>
                <div className="col-sm-6">
                    <img src={as2} className='img-fluid' alt="" />
                </div>
            </div>

            <div className="row mt-2">
                        <div className="col-sm-6">
                    <img src={as3} className='img-fluid' alt="" />
                        </div>
            <div className="col-sm-6 mt-5 text-left">
                <h2 className='font-weight-bold'>Real-time Tracking</h2>
                <p className='lead'>Track your shipment status anytime, anywhere</p>
                <p className='lead'>Set your delivery preferences & experience much more</p>
                
            </div>
   
  </div>

  <h1 className='text-center text-secondary font-weight-bold'>Our Commitment</h1>
            <div className="row mt-5">
                <div className="col-sm-3">
                <div className="card bg-info">
                <div className="card-body">
                    <h3 className="card-title font-weight-bold">Product Safety</h3>
                    
                    <p className="card-text">Your package is secure with us during every moment of the logistic process. </p>
                    
                </div>
                </div>
                </div>

                <div className="col-sm-3">
                <div className="card bg-secondary">
                <div className="card-body">
                    <h3 className="card-title font-weight-bold">Pocket Friendly</h3>
                    
                    <p className="card-text">We provide easy and affordable services. You pay only for what you ship. </p>
                    
                </div>
                </div>
                </div>

                <div className="col-sm-3">
                <div className="card bg-warning">
                <div className="card-body">
                    <h3 className="card-title font-weight-bold">Fastest Delivery</h3>
                    
                    <p className="card-text">Efficient delivery services lead to happier customers and build brand loyalty. </p>
                    
                </div>
                </div>
                </div>

                <div className="col-sm-3">
                <div className="card bg-danger">
                <div className="card-body">
                    <h3 className="card-title font-weight-bold">Easy Tracking</h3>
                    
                    <p className="card-text">Know where your order is at all times, from the pickup location to its destination.</p>
                    
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAbout;