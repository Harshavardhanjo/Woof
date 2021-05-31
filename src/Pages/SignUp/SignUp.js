import React,{useState} from 'react';
import firebase from 'firebase'
import { auth, db } from '../../firebase'
import {useStateValue} from '../../StateProvider'
import {
  BrowserRouter as Router,
  useHistory,
} from 'react-router-dom'
import { SignUpCardContainer, SignUpCardServices, SignUpContents1,GoogleButton,AppleButton,FacebookButton,SignUpContents2,VerifyButton,BackgroundImg, SignUpHeader, Logo, ContinueButton } from './SignUpElements';
import './SignUp.css'


export default function SignUp() {
  
  const history = useHistory();
  const [next,setNext] = useState(1)
  const [password1,setPassword1] = useState('1');
  const [password2,setPassword2] = useState('2');
  const [mobile,setMobile] = useState('')
  const [username,setUsername] = useState('')
  const [{name,CurrentAuthUser},dispatch] = useStateValue()
  const [email,setEmail] = useState('')

  const googleprovider = new firebase.auth.GoogleAuthProvider()

  const handleClick = (provider,e) =>
  {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password2);
    firebase.auth().signInWithPopup(provider).then(res =>{
      console.log('logged',res.user)
      dispatch({
        type : "SET_AUTH_USER",
        CurrentAuthUser : res.user
      })

      
    }).catch(e =>{
      console.log('error',e)
    })
  }

  const Continue=(e)=>{
    e.preventDefault();

      if(password1 == password2)
      {
        auth.createUserWithEmailAndPassword(email,password1).then(res => {

          console.log(res.user.email)
          db.collection('User Details').doc(res.user.email).set({

                  User_name : username,
                  Email : res.user.email,

      })

      history.push('/login')
    })

  }

  else
  {
    alert("Passwords Do Not Match")
  }
}

  return (

    <div >
      <SignUpCardContainer>
        <SignUpCardServices>
          <Logo src = 'https://cdn.discordapp.com/attachments/727623975139541032/844428949203582976/image0.png' ></Logo>
          <SignUpContents1>
            <GoogleButton onClick = {(e) => handleClick(googleprovider,e)}>Sign Up With Google</GoogleButton>
          </SignUpContents1>

          <SignUpHeader>OR</SignUpHeader>

          <SignUpContents2>
            <input type = 'text' className = 'input' placeholder = "Username" onChange = {e => setUsername(e.target.value)}/>
            <br/>
            <input type = 'text' className = 'input' placeholder = "Email" onChange = {e => setEmail(e.target.value)}/>
          </SignUpContents2>

          <SignUpContents2>
            <input type = 'password' className = 'input' placeholder = 'Password' onChange = {e => setPassword1(e.target.value)}/>
            <br/>
            <input type = 'password' className = 'input' placeholder = 'Confirm Password' onChange = {e => setPassword2(e.target.value)}/>
          </SignUpContents2>

          {/* <SignUpContents2>
            <input type = 'text' className = 'input' placeholder = "Mobile Number" onChange = {e => setMobile(e.target.value)}/>
            <VerifyButton onClick = {(e) => verifyNumber(e) }>Verify</VerifyButton>
            <div id = 'recaptcha'></div>
          </SignUpContents2> */}

          <ContinueButton onClick = {(e) => Continue(e)}>Continue</ContinueButton>

        </SignUpCardServices>
      </SignUpCardContainer>
    </div>
  );
}
