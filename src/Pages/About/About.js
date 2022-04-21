import React from 'react';
import { FcAbout } from 'react-icons/fc';
import myself from '../../images/faysal .png'
const About = () => {
    return (
        <div className='container'>
            <h1 className='text-center mt-2'><FcAbout></FcAbout>Welcome <span className='text-success'>To</span> My <span className='text-success'> World <FcAbout></FcAbout></span></h1>
            <div className=" row mt-5 shadow-lg p-3 mb-5 rounded">
                <div className="col-12 col-md-6 col-lg-9">
                    <h1>Mohammad <span className='text-success'> Faysal </span></h1>
                    <h4>My <span className='text-success'> Goal: </span></h4>
                    <blockquote>
                        I am a student of Programing Hero.My Goal is can finished my crouse on time an submit my all assignment.and get reword like ACC.When I got ACC is batter for me.Now I need to do hard work and keep practice then I reach my goal.Thanks For Visited My About Me pages.
                    </blockquote>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <img className='rounded-circle' src={myself} alt="Mohammad Faysal" />
                </div>
            </div>
        </div>
    );
};

export default About;