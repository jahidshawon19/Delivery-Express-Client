import React, { useEffect, useRef, useState  } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './Booking.css'
const Booking = () => {
    const {user} = useAuth()
  



   

    const senderNameRef = useRef()
    const senderEmailRef = useRef()
    const senderMobileRef = useRef()
    const senderAddressRef = useRef()
    const pickupPlaceRef = useRef()
    const dateRef = useRef()


    const recipentNameRef = useRef()
    const recipientEmailRef = useRef() 
    const recipientMobileRef = useRef()
    const recipentDistrictRef = useRef()
    const destinationRef = useRef()



    const parcelTypeRef = useRef()
    const parcelContainRef = useRef()
    const amountRef = useRef()




    const handleBooking = e =>{
      const senderName = senderNameRef.current.value 
      const senderEmail = senderEmailRef.current.value 
      const senderMobile = senderMobileRef.current.value 
      const senderAddress = senderAddressRef.current.value 
      const pickupPlace = pickupPlaceRef.current.value 
      const date = dateRef.current.value 


      const recipientName = recipentNameRef.current.value 
      const recipientEmail = recipientEmailRef.current.value 
      const recipientMobile = recipientMobileRef.current.value 
      const recipientDistrict = recipentDistrictRef.current.value
      const destination = destinationRef.current.value 

      const parcelType = parcelTypeRef.current.value 
      const parcelContain = parcelContainRef.current.value
      const amount = amountRef.current.value 
      

      const newBooking = {senderName, senderEmail, senderMobile, senderAddress, pickupPlace, date, recipientName, recipientMobile,recipientEmail, recipientDistrict, destination,parcelType, parcelContain,amount}

      
      fetch('https://powerful-badlands-74288.herokuapp.com/bookings', {
          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(newBooking)
      })

          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
              alert('We Recevied Your Booking. We Will Contact With You Soon. Thank You.')
          }
          })
















      e.preventDefault()
    }
  

    return (

        <>
        <Navbar></Navbar>
        <div className="container">
            <form action="" onSubmit={handleBooking}>
            <div className="row">
            
            <div className="col-lg-6">
                   
                   <section className="order-form my-4 mx-4">
                     <div className="container pt-4">
                 
                       <div className="row">
                         <div className="col-12">
                           <h1  className='text-info font-weight-bold'>Sender Details</h1>
                        
                           <hr className="mt-1" />
                         </div>
                         <div className="col-12">
                 
                           <div className="row mx-4">
                             <div className="col-12 mb-2 text-left">
                               <label className="order-form-label">SenderName</label>
                             </div>
                             <div className="col-12 ">
                               <input className="order-form-input" ref={senderNameRef} value={user.displayName} />
                             </div>
                            
                           </div>
                 
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Sender Email</label>
                             </div>
                             <div className="col-12">
                               <input className="order-form-input"  ref={senderEmailRef} value={user.email} />
                             </div>
                           </div>
                 
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Sender Mobile</label>
                             </div>
                             <div className="col-12">
                               <input className="order-form-input"  ref={senderMobileRef} placeholder=" " />
                             </div>
                           </div>

           

                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Pickup Place</label>
                             </div>
                             <div className="col-12">
                               <input className="order-form-input" ref={pickupPlaceRef} placeholder=" " />
                             </div>
                           </div>
                 
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label" for="date-picker-example">Pickup Date</label>
                             </div>
                             <div className="col-12">
                               <input className="order-form-input datepicker"  ref={dateRef} placeholder="Selected date" type="date"
                                />
                             </div>
                           </div>
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Sender Address</label>
                             </div>
                             <div className="col-12">
                               <textarea className="order-form-input" ref={senderAddressRef} placeholder=" " />
                             </div>
                           </div>
                       
                 
                 
                       
                 
                         </div>
                       </div>
                     </div>
                   </section>
            </div>


            <div className="col-lg-6">
                   
                   <section className="order-form my-4 mx-4">
                     <div className="container pt-4">
                 
                       <div className="row">
                         <div className="col-12">
                           <h1 className='text-info font-weight-bold'>Recipient Details</h1>
                           
                           <hr className="mt-1" />
                         </div>
                         <div className="col-12">
                 
                           <div className="row mx-4">
                             <div className="col-12 mb-2 text-left">
                               <label className="order-form-label">Recipient Name</label>
                             </div>
                             <div className="col-12 ">
                               <input className="order-form-input"  ref={recipentNameRef} placeholder="Full Name" />
                             </div>
                            
                           </div>
                 
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Recipient Email</label>
                             </div>
                             <div className="col-12">
                               <input className="order-form-input"  ref={recipientEmailRef} placeholder=" " />
                             </div>
                           </div>
                 
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Recipient Mobile</label>
                             </div>
                             <div className="col-12">
                               <input className="order-form-input" ref={recipientMobileRef} placeholder=" " />
                             </div>
                           </div>

           


                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Recipient District</label>
                             </div>
                             <div className="col-12">
                               
                               <select className="order-form-input" ref={recipentDistrictRef} aria-label="Default select example">
                                <option selected>District</option>
                                <option value="1">Dhaka</option>
                                <option value="2">Feni</option>
                                <option value="3">Chittagong</option>
                              </select>
                             </div>
                           </div>
                 
                      
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Destination Address</label>
                             </div>
                             <div className="col-12">
                               <textarea className="order-form-input" ref={destinationRef} placeholder=" " />
                             </div>
                           </div>
                       
                 
                         </div>
                       </div>
                     </div>
                   </section>
            </div>
            
           </div>

           <div className="row">
               <div className="col-lg-3"></div>
           <div className="col-lg-6">
                   
                   <section className="order-form my-4 mx-4">
                     <div className="container pt-4">
                 
                       <div className="row">
                         <div className="col-12">
                           <h1 className='text-info font-weight-bold'>Parcel Details</h1>
                           
                           <hr className="mt-1" />
                         </div>
                         <div className="col-12">
                 
                           <div className="row mx-4">
                             <div className="col-12 mb-2 text-left">
                               <label className="order-form-label">Parcel Type</label>
                             </div>
                             <div className="col-12 ">
                               <input className="order-form-input"  ref={parcelTypeRef}  />
                             </div>
                            
                           </div>
                 
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">What does this parcel contain?</label>
                             </div>
                             <div className="col-12">
                               <input className="order-form-input" ref={parcelContainRef} placeholder=" " />
                             </div>
                           </div>
                 
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Number of Item</label>
                             </div>
                             <div className="col-12">
                               <input className="order-form-input"  ref={amountRef} type="number" placeholder=" " />
                             </div>
                           </div>

       
                           <div className="row mt-3">
                             <div className="col-12">
                               <button type="submit" id="btnSubmit" className="btn btn-dark d-block mx-auto btn-submit">Confirm Booking</button>
                             </div>
                           </div>
                 
                         </div>
                       </div>
                     </div>
                   </section>
            </div>
            <div className="col-lg-3"></div>
           </div>
            </form>
        </div>
        <Footer></Footer>
            
        </>
    );
};

export default Booking;