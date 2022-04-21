import React from 'react';
import google from '../../images/logoes/google .png'
import facebook from '../../images/logoes/facebook-.png'
import github from '../../images/logoes/github.png'
import auth from '../../firebase.init';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleSingInLoading, googleSingInError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookSingInLoading, facebookSingInError] = useSignInWithFacebook(auth);
    const [signInWithGithub, githubUser, githubSingInLoading, githubSingInError] = useSignInWithGithub(auth);

    let errorElement;
    if (googleUser || githubUser || facebookUser) {
        navigate('/blogs')
    }
    if (googleSingInLoading || githubSingInLoading || facebookSingInLoading) {
        return <Loading></Loading>
    }
    if (googleSingInError || githubSingInError || facebookSingInError) {
        errorElement = <p className='text-danger'>Error: {googleSingInError?.message}{githubSingInError?.message}{facebookSingInError?.message}</p>
    }

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center m">
                <div style={{ height: '1px' }} className="bg-success w-50"></div>
                <p className='m-2 p-2'>or</p>
                <div style={{ height: '1px' }} className="bg-success w-50"></div>
            </div>
            {errorElement}
            <div className="">
                <button onClick={() => signInWithGoogle()} className='btn btn-white d-block w-100 mb-2 border'>
                    <img className='' src={google} alt="" />
                    <span className='ms-2'>Google sing in</span>
                </button>
                <button onClick={() => signInWithFacebook()} className='btn btn-white d-block w-100 mb-2 border'>
                    <img className='rounded-3' src={facebook} alt="" />
                    <span className='ms-2'>Facebook sing in</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-white d-block w-100 mb-2 border'>
                    <img src={github} alt="" />
                    <span className='ms-2'>Github sing in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;