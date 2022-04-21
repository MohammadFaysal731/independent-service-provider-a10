import React from 'react';

const Blogs = () => {
    return (
        <div className='row m-2'>
            <div className="col-12 col-md-4 col-lg-3 border border-success rounded-3 m-2">
                <h6>**** Difference Between Authorization And Authentication ?</h6>
                <ol>
                    <li>Authorization hosa kawek kono kaj koranr jono ba kono resources bavohan korar korte parar permission deyar pokiya. Ar Authentication hosa kono user k access access deyan system. </li>
                    <li>Authorization hosa user validated ki na sata check kora .Ar Authentication user k verified kora</li>
                    <li>Authorization karjakom Authentication ar por hoy.Ar Authentication agi hoy ter por Authorization hoy.</li>
                    <li>Authorization user ar anumote nirdaron kora.Ar Authentication proman nirdaron kora j user sothek ki na.</li>
                </ol>
            </div>
            <div className="col-12 col-md-4  col-lg-3 border border-success rounded-3 m-2">
                <ol>
                    <h6> **** Why are you using firebase ?</h6>
                    <li>karon hosa Authentication o Authorization korte suvida hoy.</li>
                    <li>firebase ar mado may email and password,google,github,facebook sing in system banate suvida hoy.</li>
                    <h6>What other options do you have to implement authentication ?</h6>
                    <li>Other options is cards, retina,scans,voice and fingerprints.sadaron noto Authentication system kono ekte server ar mado may hoya tha k.</li>
                </ol>
            </div>
            <div className="col-12 col-md-4  col-lg-3 border border-success rounded-3 m-2">
                <ol>
                    <h6>**** What other services does firebase provide other than authentication ?</h6>
                    <li>Parse open source backend platform.</li>
                    <li>Back4app parse Hosting platform.</li>
                    <li>Kinvey mobile backend as a service (mBaas)for the enterprise.</li>
                    <li>Backendless mobile backend and api services platform.</li>
                    <li>kumulos api performance management.</li>
                </ol>
            </div>

        </div >
    );
};

export default Blogs;