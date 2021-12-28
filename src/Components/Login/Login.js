import React from 'react';
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'


const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row py-5 mt-5">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                         <div className="card">
                                <div className="card-body">
                                    <h3 className='font-weight-bold text-left'>Welcome</h3>
                                    <p className="text-left">Sign up or log in to continue</p>



                                    <button className='btn btn-light btn-block text-secondary'> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BxIFDiqRSADS_dryOjRxIdflIGgt8vianZy7fPOHmGz8HsBUi-lggRTn5-raiCOnF0Q&usqp=CAU" height="20px" className='mr-2' alt="" /> CONTINUE WITH GOOGLE</button>
                                    <p className='mt-2'>Or</p>


                                     <form className='mt-3'>
                                    <div className="form-group">
                                        
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        
                                    </div>
                                    <div className="form-group">
                                       
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                
                                    <button type="submit" className="btn btn-warning btn-sm">Sign in</button>
                                    </form>


                                    
                                    <p>Are you new here? <a href="/home" className='text-danger'>Create Account</a></p>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
            <Footer></Footer>
         
        </div>
    );
};

export default Login;