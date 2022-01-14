import React, {useState, useEffect} from 'react';

import useAuth from '../../../hooks/useAuth'

const OrderedServices = () => {
    const {user} = useAuth()
    const [bookings, setBookings] = useState([])
    
    useEffect( ()=>{
        const url = `http://localhost:5000/bookings?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])

    return (
        <>
          <div className="container">
            <div className="row mt-5">
                <div className="col-lg-3">
                <div className="card bg-light">
                <div className="card-body">
                    <h6 className='font-weight-bold'>User Information</h6>
                    <p><span className='text-info font-weight-bold'>Email:</span> {user.email}</p>
                    <p><span className='text-info font-weight-bold'>Total Bookings:{bookings.length}</span></p>
                </div>
                </div>
                </div>
                <div className="col-lg-9">
                    <h3>Your Booking Summery</h3>
                <table className="table table-primary">
                <thead>
                    <tr>
                    <th scope="col">Pickup Place</th>
                    <th scope="col">Recipient Name</th>
                    <th scope="col">Recipient Mobile</th>
                    <th scope="col">Parcel Type</th>
                    <th scope="col">Parcel Contain</th>
                    <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map( (b)=>(
                            <tr>
                                <td>{b.pickupPlace}</td>
                                <td>{b.recipientName}</td>
                                <td>{b.recipientMobile}</td>
                                <td>{b.parcelType}</td>
                                <td>{b.parcelContain}</td>
                                <td>{b.amount}</td>
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

export default OrderedServices;