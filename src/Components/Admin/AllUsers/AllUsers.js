import React, { useState, useEffect } from 'react';
import AdminNav from '../AdminNav/AdminNav'

const AllUsers = () => {
    const [allUsers, setAllUsers] = useState([])

    useEffect( ()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setAllUsers(data))
    }, [])
    return (
        <>
            <AdminNav></AdminNav>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-12">
                    <h2 className='text-center text-secondary font-weight-bold mt-5'>Total Registered Users: {allUsers.length}</h2>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                    <table className="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers.map( (user)=>(
                            <tr>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                               
                            </tr>
                        ))
                    }

                </tbody>
                </table>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </>
    );
};

export default AllUsers;