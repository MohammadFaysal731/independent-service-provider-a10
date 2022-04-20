import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div className='p-5 mt-3 w-50 mx-auto border rounded'>
            <h3 className='text-success'>Please Login</h3>
            <Form>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;