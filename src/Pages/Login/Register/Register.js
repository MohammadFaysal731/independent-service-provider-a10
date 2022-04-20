import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../../../Sheared/SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }
    return (
        <div className='p-5 mt-3 w-50 mx-auto border rounded'>
            <h3 className='text-success'>Please Register</h3>
            <Form>
                <Form.Group className="mb-3 " controlId="formBasicName">
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Button variant="success w-100" type="submit">
                    Register
                </Button>
            </Form>
            <p>New to Strong Gym ? <button onClick={navigateLogin} className='btn btn-link text-success text-decoration-none'>Login</button></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;