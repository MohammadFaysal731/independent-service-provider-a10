import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Sheared/Loading/Loading';
import SocialLogin from '../../../Sheared/SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const navigateRegister = () => {
        navigate('/register')
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        singInError
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent Email For ResetPassword');
        }
        else {
            toast('Please Enter Email Address');
        }
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
                <p className='text-danger'>{singInError?.message}{resetError?.message}</p>
                <Button variant="success w-100" type="submit">
                    Login
                </Button>
            </Form>
            <p></p>
            <p>Already have an account ? <button onClick={navigateRegister} className='btn btn-link text-success  text-decoration-none'>Register</button></p>
            <p>Forget Password ? <button onClick={resetPassword} className='btn btn-link text-success  text-decoration-none'>Reset Password</button></p>
            <SocialLogin></SocialLogin>

        </div>


    );
};

export default Login;