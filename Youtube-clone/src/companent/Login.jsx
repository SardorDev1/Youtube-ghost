import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { signInWithGoogle } from './firebase/config';
import Sign from "../assets/sign.png"
import "../App.css"
import 'react-lazy-load-image-component/src/effects/blur.css';
const Login = () => {
    return (
        <div className='logIn ' >
        <div className="Logo">
       <div  onClick={signInWithGoogle} className="signs">
       <LazyLoadImage  className='text-center' src={Sign} effect="blur"  />

       </div>

          
        </div>
        
        </div>
    );
};


export default Login;