import React from 'react';
import google from '../../images/logoes/google .png'
import facebook from '../../images/logoes/facebook-.png'
import github from '../../images/logoes/github.png'
const SocialLogin = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center m">
                <div style={{ height: '1px' }} className="bg-success w-50"></div>
                <p className='m-2 p-2'>or</p>
                <div style={{ height: '1px' }} className="bg-success w-50"></div>
            </div>
            <div className="">
                <button className='btn btn-white d-block w-100 mb-2 border'>
                    <img className='' src={google} alt="" />
                    <span className='ms-2'>Google sing in</span>
                </button>
                <button className='btn btn-white d-block w-100 mb-2 border'>
                    <img className='rounded-3' src={facebook} alt="" />
                    <span className='ms-2'>Facebook sing in</span>
                </button>
                <button className='btn btn-white d-block w-100 mb-2 border'>
                    <img src={github} alt="" />
                    <span className='ms-2'>Github sing in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;