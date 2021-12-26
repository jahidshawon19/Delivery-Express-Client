import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
            <nav className="main-menuBar navbar navbar-expand-lg">
            <a className="main-menuBrand navbar-brand" href="#">Delivery Express</a>
            <button className="main-menuToggle navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="main-menuToggle-icon navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="main-menuItem nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="main-menuItem nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="main-menuItem nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="main-menuItem nav-item">
                        <a className=" btn btn-outline-warning btn-sm mt-2" href="#">Sign In</a>
                    </li>
                </ul>
            </div>
            </nav>
    );
};

export default Navbar;