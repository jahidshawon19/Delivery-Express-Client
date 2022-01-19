import React, { useRef } from 'react';
import AdminNav from '../AdminNav/AdminNav'

const AddService = () => {
    const serviceNameRef = useRef()
    const shortDescriptionRef = useRef()
    const photoUrlRef = useRef()

    const handleService = e =>{
        const serviceName = serviceNameRef.current.value 
        const shortDescription = shortDescriptionRef.current.value 
        const photoUrl = photoUrlRef.current.value 

        const newService = {serviceName, shortDescription, photoUrl}

        fetch('https://powerful-badlands-74288.herokuapp.com/addservices', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newService)

        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('New Service Added')
            }
        })
        e.preventDefault()
    }
    return (
        <>
        <AdminNav></AdminNav>
        <div className="container">
            <h2 className='text-center text-secondary font-weight-bold mt-5'>Add New Service</h2>
            <div className="row mt-5">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
            <form  onSubmit={handleService}>
            <div className="form-group">
                <label>Service Name</label>
                <input type="text" className="form-control" ref={serviceNameRef}/>        
            </div>
            <div className="form-group">
            <label>Short Description</label>
                <input type="text" className="form-control" ref={shortDescriptionRef}/>        
            </div>
            <div className="form-group">
                <label>Photo URL</label>
                <input type="text" className="form-control" ref={photoUrlRef}/>        
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            </form>                
            </div>
            <div className="col-lg-4"></div>
            </div>
        </div>
            
        </>
    );
};

export default AddService;