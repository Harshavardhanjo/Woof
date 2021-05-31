
import React, { useState } from 'react'
import {auth} from '../../firebase';
import { LoginBox, LoginButton, LoginContainer, LoginPassword, LoginUserName } from './LoginElements';
import './Login.css'
import {
    BrowserRouter as Router,
    useHistory,
  } from 'react-router-dom'
import { useStateValue } from '../../StateProvider';

const Login = () => {

    const history = useHistory();

    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const [{CurrentAuthUser},dispatch] = useStateValue();

    const Signin = (e) =>
    {

        console.log("Username is ", username)
        console.log("password is", password)
        e.preventDefault();
        auth.signInWithEmailAndPassword(username, password).then((res) => {
            console.log(res)
            history.push('/MyProfile')
            dispatch({
                type : "SET_AUTH_USER",
                data : res.user
            })
        }).catch((res) =>{
            alert(res.message)
        })
    }
    return (
        <div className = 'Login'>
            <LoginContainer>
                <LoginBox>
                    <label>Enter Username</label>
                    <LoginUserName onChange = {e => setUsername(e.target.value)}/>
                </LoginBox>

                <LoginBox>
                    <label>Enter Password</label>
                    <LoginPassword type = 'password' onChange = {e => setPassword(e.target.value)}/>
                </LoginBox>

                <LoginBox>
                    <LoginButton onClick = {(e) => Signin(e)}>Login</LoginButton>
                </LoginBox>
                
            </LoginContainer>
        </div>
    )
}

export default Login
