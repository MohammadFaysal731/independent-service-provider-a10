import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <p className='text-success text-center m-5'>Copyrights &copy;{year} </p>
        </div>
    );
};

export default Footer;