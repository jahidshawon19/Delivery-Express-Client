import React from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './Booking.css'
const Booking = () => {
    const {user} = useAuth()
    return (

        <>
        <Navbar></Navbar>
        <div className="container">
            <form action="">
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
                               <input className="order-form-input" value={user.displayName} />
                             </div>
                            
                           </div>
                 
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Sender Email</label>
                             </div>
                             <div className="col-12">
                               <input className="order-form-input" value={user.email} />
                             </div>
                           </div>
                 
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Sender Mobile</label>
                             </div>
                             <div className="col-12">
                               <input className="order-form-input" placeholder=" " />
                             </div>
                           </div>

           

                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Pickup Place</label>
                             </div>
                             <div className="col-12">
                               <input className="order-form-input" placeholder=" " />
                             </div>
                           </div>
                 
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label" for="date-picker-example">Pickup Date</label>
                             </div>
                             <div className="col-12">
                               <input className="order-form-input datepicker" placeholder="Selected date" type="date"
                                />
                             </div>
                           </div>
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Sender Address</label>
                             </div>
                             <div className="col-12">
                               <textarea className="order-form-input" placeholder=" " />
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
                               <input className="order-form-input" placeholder="Full Name" />
                             </div>
                            
                           </div>
                 
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Recipient Email</label>
                             </div>
                             <div className="col-12">
                               <input className="order-form-input" placeholder=" " />
                             </div>
                           </div>
                 
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Recipient Mobile</label>
                             </div>
                             <div className="col-12">
                               <input className="order-form-input" placeholder=" " />
                             </div>
                           </div>

           


                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Recipient District</label>
                             </div>
                             <div className="col-12">
                               <input className="order-form-input" placeholder=" " />
                             </div>
                           </div>
                 
                      
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Destination Address</label>
                             </div>
                             <div className="col-12">
                               <textarea className="order-form-input" placeholder=" " />
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
                               <input className="order-form-input" />
                             </div>
                            
                           </div>
                 
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">What does this parcel contain?</label>
                             </div>
                             <div className="col-12">
                               <input className="order-form-input" placeholder=" " />
                             </div>
                           </div>
                 
                           <div className="row mt-3 mx-4">
                             <div className="col-12 text-left">
                               <label className="order-form-label">Number of Item</label>
                             </div>
                             <div className="col-12">
                               <input className="order-form-input" type="number" placeholder=" " />
                             </div>
                           </div>

       
                           <div className="row mt-3">
                             <div className="col-12">
                               <button type="button" id="btnSubmit" className="btn btn-dark d-block mx-auto btn-submit">Confirm Booking</button>
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