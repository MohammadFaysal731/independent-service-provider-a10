import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
    const navigate = useNavigate();

    const handleCheckout = id => {
        navigate(`/services/${id}`)
    }
    return (
        <div className='p-5 mt-3 w-50 mx-auto border rounded'>
            <h3 className='text-success'>Please Checkout</h3>
            <Form>
                <Form.Group className="mb-3 " controlId="formBasicName">
                    <Form.Control type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Control type="password" placeholder="Enter Address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Control type="number" placeholder="Enter Phone" required />
                </Form.Group>
                <Button variant="success" type="submit">
                    Checkout
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;