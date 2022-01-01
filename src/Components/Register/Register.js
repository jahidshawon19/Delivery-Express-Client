import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'
import { Link } from 'react-router-dom';

const Register = () => {

    const [registerData, setRegisterData] = useState({})

    const handleOnChange = e =>{

        const field = e.target.name 
        const value = e.target.value 
        const newRegisterData = { ...registerData }
        newRegisterData[field] = value 
        setRegisterData(newRegisterData)
       
}



    const handleRegisterSubmit = e =>{
        if(registerData.password !== registerData.password2){
            alert('Password Did Not Match')
            return 
        }
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
                                    <p className="text-left">Create Account</p>



                                    <button className='btn btn-light btn-block text-secondary'> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BxIFDiqRSADS_dryOjRxIdflIGgt8vianZy7fPOHmGz8HsBUi-lggRTn5-raiCOnF0Q&usqp=CAU" height="20px" className='mr-2' alt="" /> CONTINUE WITH GOOGLE</button>
                                    <p className='mt-2'>Or</p>


                                     <form className='mt-3'  onSubmit={handleRegisterSubmit}>
                                    <div className="form-group">
                                        
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  name="email" onChange={handleOnChange} />
                                        
                                    </div>
                                    <div className="form-group">
                                       
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={handleOnChange}/>
                                    </div>

                                    <div className="form-group">
                                       
                                       <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" name="password2" onChange={handleOnChange}/>
                                   </div>
                                
                                    <button type="submit" className="btn btn-warning btn-sm">Sign up</button>
                                    </form>



                                    <p>Already Registered? <Link to="/login" className='text-danger' style={{textDecoration:"none"}}>Sign in</Link></p>
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

export default Register;