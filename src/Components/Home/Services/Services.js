import React from 'react';
import './Services.css'



import s1 from '../../../img/Apparel & Accessories.jpg'
import s2 from '../../../img/Appliances.jpg'
import s3 from '../../../img/Books & Stationery.jpg'
import s4 from '../../../img/Documents.jpg'
import s5 from '../../../img/Electronics.jpg'
import s6 from '../../../img/Health & Wellness.jpg'
import s7 from '../../../img/Homemade Food.jpg'
import s8 from '../../../img/Household Decoration.jpg'

const Services = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-secondary font-weight-bold'>Ship almost anything across categories</h1>
            <div className="row mt-5">
                <div className="col-sm-3">
                    <div className="card service-card">
                        <img src={s1} alt="" />
                        <div className="info">
                            
                            <h3>Apparel & Accessories</h3>
                            
                            <a href="/" className="btn btn-light text-dark">Place Order</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="card service-card">
                        <img src={s2} alt="" />
                        <div className="info">
                        <h3>Appliances</h3>
                            
                            <a href="/" className="btn btn-light text-dark">Place Order</a>
                        </div>
                    </div>
                </div>


                <div className="col-sm-3">
                    <div className="card service-card">
                        <img src={s3} alt="" />
                        <div className="info">
                        <h3>Books & Stationery</h3>
                            
                            <a href="/" className="btn btn-light text-dark">Place Order</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="card service-card">
                        <img src={s4} alt="" />
                        <div className="info">
                        <h3>Documents</h3>
                            
                            <a href="/" className="btn btn-light text-dark">Place Order</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                    <div className="col-sm-3">
                            <div className="card service-card">
                                <img src={s5} alt="" />
                                <div className="info">
                                <h3>Electronics</h3>
                                   
                                    <a href="/" className="btn btn-light text-dark">Place Order</a>
                                </div>
                            </div>
                        </div>


                    <div className="col-sm-3">
                    <div className="card service-card">
                        <img src={s6} alt="" />
                        <div className="info">
                        <h3>Health & Wellness</h3>
                            
                            <a href="/" className="btn btn-light text-dark">Place Order</a>
                        </div>
                    </div>
                </div>


                <div className="col-sm-3">
                    <div className="card service-card">
                        <img src={s7} alt="" />
                        <div className="info">
                        <h3>Homemade Food</h3>
                            
                            <a href="/" className="btn btn-light text-dark">Place Order</a>
                        </div>
                    </div>
                </div>


                <div className="col-sm-3">
                    <div className="card service-card">
                        <img src={s8} alt="" />
                        <div className="info">
                        <h3>Household Decoration</h3>
                            
                            <a href="/" className="btn btn-light text-dark">Place Order</a>
                        </div>
                    </div>
                </div>


            </div>

        

            
        </div>
    );
};

export default Services;