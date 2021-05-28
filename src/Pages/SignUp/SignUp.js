import React,{useState,useEffect} from 'react';
import firebase from 'firebase'
import dog from '../../images/dog.jpg'
import { auth } from '../../firebase'
import {useStateValue} from '../../StateProvider'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom'
import { SignUpCardContainer, SignUpCardServices, SignUpContents1,GoogleButton,AppleButton,FacebookButton,SignUpContents2,VerifyButton,BackgroundImg, SignUpHeader, Logo, ContinueButton } from './SignUpElements';
import './SignUp.css'
import { CompareArrowsOutlined } from '@material-ui/icons';


export default function SignUp() {
  
  const history = useHistory();
  const [next,setNext] = useState(1)
  const [password1,setPassword1] = useState('1');
  const [password2,setPassword2] = useState('2');
  const [mobile,setMobile] = useState('')
  const [username,setUsername] = useState('')
  const [{User},dispatch] = useStateValue()
  const [email,setEmail] = useState('')

  const [content1,setContent1] = useState(['E-mail','Mobile','Password','Re-Enter Password','What would you like your display name to be?','A little description about you'])

  const googleprovider = new firebase.auth.GoogleAuthProvider()
  const facebookprovider = new firebase.auth.FacebookAuthProvider()
  const appleprovider = new firebase.auth.OAuthProvider('apple.com');

  const handleClick = (provider,e) =>
  {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password2);
    firebase.auth().signInWithPopup(provider).then(res =>{
      console.log('logged',res.user)
      dispatch({
        type : "SET_USER",
        CurrentAuthUser : auth.user
      })
      history.push('/SetUpProfile')
    }).catch(e =>{
      console.log('error',e)
    })
  }

  const verifyNumber=(e)=>{
    e.preventDefault();
    if(mobile == '')
    {
      alert("No Number Entered")
    }
    else{

      if(password1 == password2)
      {

    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    var number = '+91' + mobile;
    auth.createUserWithEmailAndPassword(email,password1)
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
      var code = prompt('Enter the otp', '');

        if(code === null) 
        {
          {<h1>Some Funs</h1>}
        }

        e.confirm(code).then(function (result) {
            console.log(result.user);

            // document.querySelector('label').textContent +=   result.user.phoneNumber + "Number verified";
            history.push('/Tags')
            
        }).catch(function (error) {
            console.error( error);
            
        });

    })
    .catch(function (error) {
        console.error( error);

    });
  }

  else{
    alert('Passwords do not match')
  }

  }
  }

   const Continue = (e) =>
  {
    history.push('/EditProfile')
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

          <SignUpContents2>
            <input type = 'text' className = 'input' placeholder = "Mobile Number" onChange = {e => setMobile(e.target.value)}/>
            <VerifyButton onClick = {(e) => verifyNumber(e) }>Verify</VerifyButton>
            <div id = 'recaptcha'></div>
          </SignUpContents2>

          <ContinueButton onClick = {(e) => Continue(e)}>Continue</ContinueButton>

        </SignUpCardServices>
      </SignUpCardContainer>
    </div>
  );
}
