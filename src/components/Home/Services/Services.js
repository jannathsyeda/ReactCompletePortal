import React from 'react';
import img1 from '../../../images/img1.png';
import img2 from '../../../images/img2.png';
import img3 from '../../../images/img3.png';
import ServiceDetail from '../ServicesDetail/ServicesDetail';


const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: img1
    },
    {
        name: 'Cavity Filling',
        img: img2
    },
    {
        name: 'Teeth Whitening',
        img: img3
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;