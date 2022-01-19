import React, { useState } from 'react';
import AdminNav from '../AdminNav/AdminNav'
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e =>{
        const user = { email }
        fetch('https://powerful-badlands-74288.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data => {
           if(data.modifiedCount){
               
               alert('Admin Created Successfully')
           }
        })
        e.preventDefault()
    }
    return (
        <>
            <AdminNav></AdminNav>
          
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                        <form onSubmit={handleAdminSubmit}>
                        <div className="form-group">
                        <h2 className='text-center text-secondary font-weight-bold mt-5'>Make Admin</h2>
                         <input type="email" class="form-control" onBlur={handleOnBlur} placeholder="Enter email" />
                         <button type="submit" className="btn btn-primary mt-2">Submit</button>
                         </div>
                        </form>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
         
        </>
    );
};

export default MakeAdmin;