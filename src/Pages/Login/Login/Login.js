import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../../../Sheared/SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/register')
    }

    return (
        <div className='p-5 mt-3 w-50 mx-auto border rounded '>
            <h3 className='text-success'>Please Login</h3>
            <Form>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Enter Password" required />
                </Form.Group>
                <Button variant="success w-100" type="submit">
                    Login
                </Button>
            </Form>
            <p>Already have an account ? <button onClick={navigateRegister} className='btn btn-link text-success  text-decoration-none'>Register</button></p>
            <SocialLogin></SocialLogin>
        </div>


    );
};

export default Login;