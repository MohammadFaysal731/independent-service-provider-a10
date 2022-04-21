import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../../Sheared/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import Loading from '../../../Sheared/Loading/Loading'
import auth from '../../../firebase.init';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [agree, setAgree] = useState(false);

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
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
        navigate(from, { replace: true })
    }
    if (loading || sending) {
        return <Loading></Loading>
    }

    const handelRegister = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            return setError('Please set sam password both password field !!');
        }
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification(email)
        alert('Sent email')
    }



    return (
        <div className='p-5 mt-3 w-50 mx-auto border rounded'>
            <h3 className='text-success'>Please Register</h3>
            <Form onSubmit={handelRegister}>
                <Form.Group className="mb-3 " controlId="formBasicName">
                    <Form.Control onBlur={handelNameBlur} type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control onBlur={handelEmailBlur} type="email" placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handelPasswordBlur} type="password" placeholder="Enter Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control onBlur={handelConfirmPasswordBlur} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" name='terms' label="Agree to STRONG GYM terms and conditions" />
                </Form.Group>
                <Button disabled={!agree} variant="success w-100" type="submit">
                    Register
                </Button>
            </Form>
            <p>New to Strong Gym ? <button onClick={navigateLogin} className='btn btn-link text-success text-decoration-none'>Login</button></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;