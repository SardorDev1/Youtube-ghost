import React from 'react';
import { signInWithGoogle } from './firebase/config';

const Login = () => {
    return (
        <div>
            <button onClick={signInWithGoogle} >AA</button>
        </div>
    );
};


export default Login;