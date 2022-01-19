import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav';

const BookingDetails = () => {
    const {bookingId} = useParams()
    const [bookingDetails, setBookingDetails] = useState({})

    useEffect(()=>{
        const url = `https://powerful-badlands-74288.herokuapp.com/allbookings/${bookingId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setBookingDetails(data))
    })

    return (
        <>
          <AdminNav></AdminNav>
          <div className="container">
          <h2 className='text-center text-secondary font-weight-bold mt-5'>Booking Details</h2>
              <div className="row mt-2">
                <div className="col-lg-12">
                    
                <div className="card bg-light">
                <div className="card-body text-left">
                    <h4>Sender Details</h4>
                    <p><span className='text-primary'>Name: </span> {bookingDetails.senderName}</p>
                    <p><span className='text-primary'>Email: </span> {bookingDetails.senderEmail}</p>
                    <p><span className='text-primary'>Mobile: </span> {bookingDetails.senderMobile}</p>
                    <p><span className='text-primary'>Address: </span> {bookingDetails.senderAddress}</p>
                
                </div>
                </div>
                </div>
              </div>


              <div className="row mt-2">
                <div className="col-lg-12">
                    
                <div className="card bg-light">
                <div className="card-body text-left">
                    <h4>Recipient Details</h4>
                    <p><span className='text-primary'>Name: </span> {bookingDetails.recipientName}</p>
                    <p><span className='text-primary'>Email: </span> {bookingDetails.recipientEmail}</p>
                    <p><span className='text-primary'>Mobile: </span> {bookingDetails.recipientMobile}</p>
                    <p><span className='text-primary'>Destination: </span> {bookingDetails.destination}</p>
                    <p><span className='text-primary'>District: </span> {bookingDetails.recipientDistrict}</p>
                
                </div>
                </div>
                </div>
              </div>
              
              <div className="row mt-2">
                <div className="col-lg-12">
                    
                <div className="card bg-light">
                <div className="card-body text-left">
                    <h4>Recipient Details</h4>
                    <p><span className='text-primary'>Parcel Type: </span> {bookingDetails.parcelType}</p>
                    <p><span className='text-primary'>Parcel Contain: </span> {bookingDetails.parcelContain}</p>
                    <p><span className='text-primary'>amount: </span> {bookingDetails.amount}</p>
                   
                  
                
                </div>
                </div>
                </div>
              </div>
          </div>

        
        </>
    );
};

export default BookingDetails;