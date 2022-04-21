import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center w-100'>
            <Spinner animation="grow" variant="success" />
        </div>
    );
};

export default Loading;