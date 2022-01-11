import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navbar.css'

const Navbar = () => {
    const {user, logOutUser} = useAuth()
    return (
            <nav className="main-menuBar navbar navbar-expand-lg">
                <Link className="main-menuBrand navbar-brand" to="/home"> Delivery Express</Link>
           
            <button className="main-menuToggle navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="main-menuToggle-icon navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="main-menuItem nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="main-menuItem nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="main-menuItem nav-item">
                        <a className="nav-link" href="#">About</a>


                    </li>
                    {
                        user.email?
                        <>
                         <li className="main-menuItem nav-item">
                        <Link  className='nav-link' to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="main-menuItem nav-item">
                        <Link onClick={logOutUser} className=" btn btn-danger btn-sm mt-2" to="/login">Log Out</Link>
                        </li>
                        </>
                        :
                        <li className="main-menuItem nav-item">
                        <Link className=" btn btn-danger btn-sm mt-2" to="/login">Sign In</Link>
                        </li>
                    }
           
                </ul>
            </div>
            </nav>
    );
};

export default Navbar;