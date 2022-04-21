import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Sheared/Loading/Loading';
import SocialLogin from '../../../Sheared/SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [error, setError] = useState();
    const navigateRegister = () => {
        navigate('/register')
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate('/blogs')
    }
    if (loading) {
        return <Loading></Loading>
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='p-5 mt-3 w-50 mx-auto border rounded '>
            <h3 className='text-success'>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Enter Password" required />
                </Form.Group>
                <Button variant="success w-100" type="submit">
                    Login
                </Button>
            </Form>
            <p>Already have an account ? <button onClick={navigateRegister} className='btn btn-link text-success  text-decoration-none'>Register</button></p>
            <p>Forget Password ? <button className='btn btn-link text-success  text-decoration-none'>Reset Password</button></p>
            <SocialLogin></SocialLogin>
        </div>


    );
};

export default Login;