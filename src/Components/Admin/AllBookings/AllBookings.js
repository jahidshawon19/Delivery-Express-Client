import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav'

const AllBookings = () => {
    const [allbookings, setAllBookings] = useState([])

    useEffect(()=>{
        fetch('https://powerful-badlands-74288.herokuapp.com/allbookings')
        .then(res => res.json())
        .then(data => setAllBookings(data))
    }, [])

    return (
        <>
        <AdminNav></AdminNav>
            <div className="container">
                <h2 className='text-center text-secondary font-weight-bold mt-5'>All Bookings</h2>
                <hr />
                <div className="row mt-5">
                    <div className="col-lg-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">Sender Name</th>
                            <th scope="col">Sender Mobile</th>
                            <th scope="col">Pickup Place</th>
                            <th scope="col">Pickup Date</th>
                            <th scope="col">Details</th>
                            </tr>
                        </thead>
                            <tbody>
                                {
                                    allbookings.map((booking)=>(
                                        <tr>
                                        
                                        <td>{booking.senderName}</td>
                                        <td>{booking.senderMobile}</td>
                                        <td>{booking.pickupPlace}</td>
                                        <td>{booking.date}</td>
                                        
                                        <td><Link to={`/booking_details/${booking._id}`} className='btn btn-info btn-sm'>Details</Link></td>
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

export default AllBookings;