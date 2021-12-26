import React from 'react';
import './Banner.css' 
import bannerImage from '../../../img/banner.png'

const Banner = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-6 text-left">
                    <h1 className='banner-title font-weight-bold'>On-demand national courier service <br />
                        at your <span className='text-warning'>doorstep</span>
                    </h1>
                    <button className='btn btn-danger text-light'>Order Place</button>
                </div>
                <div className="col-sm-6">
                    <img src={bannerImage} className='img-fluid mt-3 banner-img' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;