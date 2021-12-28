import React from 'react';
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'


const NotFound = () => {
    return (
        <>
            <Navbar></Navbar>
                <div className="container">
                    <div className="row mt-5 py-5">
                        <div className="col-sm-12">
                            <img src="https://wips.plug.it/cips/italiaonline.it/blog/cms/2020/03/errore-404.jpg" alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            <Footer></Footer>
        </>
    );
};

export default NotFound;