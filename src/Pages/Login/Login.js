import React from 'react'
import {auth} from '../../firebase';

const Login = () => {

    console.log(auth.authuser)
    return (
        <div>
            <h1>Login</h1>
        </div>
    )
}

export default Login
