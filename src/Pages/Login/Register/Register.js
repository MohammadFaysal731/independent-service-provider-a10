import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../../../Sheared/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigateLogin = () => {
        navigate('/login')
    }

    const handelNameBlur = event => {
        setName(event.target.value);
    }
    const handelEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handelPasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handelConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/home')
    }

    const handelRegister = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            return error;
        }
        createUserWithEmailAndPassword(email, password)

    }



    return (
        <div className='p-5 mt-3 w-50 mx-auto border rounded'>
            <h3 className='text-success'>Please Register</h3>
            <Form onSubmit={handelRegister}>
                <Form.Group className="mb-3 " controlId="formBasicName">
                    <Form.Control onBlur={handelNameBlur} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control onBlur={handelEmailBlur} type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handelPasswordBlur} type="password" placeholder="Enter Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control onBlur={handelConfirmPasswordBlur} type="password" placeholder="Confirm Password" />
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