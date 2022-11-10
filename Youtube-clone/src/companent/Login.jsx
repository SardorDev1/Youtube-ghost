import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Sign from "../assets/sign.png"
import "../App.css"
import 'react-lazy-load-image-component/src/effects/blur.css';
import { SigninWithGoogle } from './firebase/config';
const Login = () => {






    return (
        <>
        <div className='logIn ' >
        <h2 className='text-center mt-5'>Sign in for your own security👍</h2>
        <div className="Logo">
       <div  onClick={SigninWithGoogle}>
       <LazyLoadImage  width={`100%`} height={`100%`} className='text-center signs' src={Sign} effect="blur"  />

       </div>

          
        </div>
        
        </div></>
    );
};


export default Login;