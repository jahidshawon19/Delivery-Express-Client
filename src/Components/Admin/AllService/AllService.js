import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav'
const AllService = () => {
    const [allServices, setAllServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setAllServices(data))
    }, [])
    return (
        <>
            <AdminNav></AdminNav>

            <div className="container">
                <h2 className='text-center text-secondary font-weight-bold mt-5'>All Services</h2>
                <hr />
                <div className="row mt-5">
                    <div className="col-lg-12">
                    <table className="table table-bordered">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">Service Name</th>
                            <th scope="col">Details</th>
                            <th scope="col">photo</th>
                            <th>Action</th>
                          
                            </tr>
                        </thead>
                            <tbody>
                                {
                                    allServices.map((service)=>(
                                        <tr>
                                        
                                        <td>{service.serviceName}</td>
                                        <td>{service.shortDescription}</td>
                                        <td><img src={service.photoUrl} alt=""  height="50px" width="50px"/></td>
                                       
                                        
                                        <td><Link to="" className='btn btn-info btn-sm'>Edit</Link> || <Link to="" className='btn btn-danger btn-sm'>Delete</Link></td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllService;