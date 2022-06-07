import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('servicesdata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container '>
            <h1 className='text-success text-center m-4'>Services</h1>
            <div className="row mx-5">
                {
                    services.map(service => <Service
                        service={service}
                        key={service.id}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;