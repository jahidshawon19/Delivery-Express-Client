import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const {user, logInUser, loading, authError} = useAuth()
    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e =>{

        const field = e.target.name 
        const value = e.target.value 
        const newLoginData = { ...loginData }
        newLoginData[field] = value 
        setLoginData(newLoginData)
}


    const handleLoginSubmit = e =>{
        logInUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
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


                                    { !loading &&  <form className='mt-3'  onSubmit={handleLoginSubmit}>
                                    <div className="form-group">
                                        
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  name="email" onChange={handleOnChange} />
                                        
                                    </div>
                                    <div className="form-group">
                                       
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={handleOnChange}/>
                                    </div>
                                
                                    <button type="submit" className="btn btn-warning btn-sm">Sign in</button>
                                    </form>}
                                    {
                                        user?.email &&  <div className="alert alert-info" role="alert">Login Successfully</div>
                                    }

                                    {
                                        authError && <div className="alert alert-danger" role="alert">{authError}</div>
                                    }



                                    <p>Are you new here? <Link to="/register" className='text-danger' style={{textDecoration:"none"}}>Create Account</Link></p>
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