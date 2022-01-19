import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const LoadServices = () => {
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch('https://powerful-badlands-74288.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center text-secondary font-weight-bold'>Ship almost anything across categories</h1>
            <div className="row mt-5">
                {
                    service.map(ser => <SingleService
                    
                        key={ser._id}
                        serviceData = {ser}
                    
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default LoadServices;