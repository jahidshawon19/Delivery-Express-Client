import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth.js'

const AdminNav = () => {
    const {admin} = useAuth()
    return (
        <>
                  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Welcome to Dashboard</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Visit Site</Link>
                    </li>

                    {admin && <>
                        <li className="nav-item">
                        <Link className="nav-link" to="/allbookings">All Bookings</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/addservice">Add New Service</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/allservices">Service List</Link>
                        </li> 
                        <li className="nav-item">
                        <Link className="nav-link" to="/allusers">All Users</Link>
                         </li> 
                         <li className="nav-item">
                        <Link className="nav-link" to="/makeadmin">Make Admin</Link>
                         </li>
                        </>}
                    
                    

                    
                
                    
                    </ul>

                </div>
                </nav>  
        </>
    );
};

export default AdminNav;