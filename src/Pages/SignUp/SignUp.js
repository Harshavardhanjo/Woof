import React,{useState} from 'react';
import firebase from 'firebase'
import dog from '../../images/dog.jpg'
import { auth } from '../../firebase';
import {useStateValue} from '../../StateProvider'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom'
import { SignUpCardContainer, SignUpCardServices, SignUpContents1,GoogleButton,AppleButton,FacebookButton,SignUpContents2,VerifyButton } from './SignUpElements';
import './SignUp.css'
import { CompareArrowsOutlined } from '@material-ui/icons';


export default function SignUp() {
  
  const history = useHistory();
  const [next,setNext] = useState(1)
  const [email,setEmail] = useState('');
  const [password1,setPassword1] = useState('1');
  const [password2,setPassword2] = useState('2');
  const [mobile,setMobile] = useState('')
  const [user,setUser] = useState({UserName : 'default', Bio : 'default'})

  const [content1,setContent1] = useState(['E-mail','Mobile','Password','Re-Enter Password','What would you like your display name to be?','A little description about you'])

  const googleprovider = new firebase.auth.GoogleAuthProvider()
  const facebookprovider = new firebase.auth.FacebookAuthProvider()
  const appleprovider = new firebase.auth.OAuthProvider('apple.com');

  const handleClick = (provider,e) =>
  {
    e.preventDefault()
    console.log("Google btn clicked")
    firebase.auth().signInWithPopup(provider).then(res =>{
      console.log('logged',res.user)
      history.push('/Home')
    }).catch(e =>{
      console.log('error',e)
    })
  }

  const verifyNumber=(e)=>{
    e.preventDefault();
    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    // var number = '+xxxxxxxxxxx';
    firebase.auth().signInWithPhoneNumber(mobile, recaptcha).then( function(e) {
      var code = prompt('Enter the otp', '');

        
        if(code === null) return;

        
        e.confirm(code).then(function (result) {
            console.log(result.user);

            // document.querySelector('label').textContent +=   result.user.phoneNumber + "Number verified";
            history.push('/Home')
            
        }).catch(function (error) {
            console.error( error);
            
        });

    })
    .catch(function (error) {
        console.error( error);

    });
  }

  return (

    <div>
      <SignUpCardContainer>
        <SignUpCardServices>
          <SignUpContents1>
            <GoogleButton onClick = {(e) => handleClick(googleprovider,e)}>Sign Up With Google</GoogleButton>
            <FacebookButton onClick = {(e) => handleClick(facebookprovider,e)}>Sign Up With Facebook</FacebookButton>
            <AppleButton onClick = {(e) => handleClick(appleprovider,e)}>Sign Up With Apple</AppleButton>
          </SignUpContents1>
          <SignUpContents2>
            <label>Mobile No:</label>
            <input type = 'text' onChange = {e => setMobile(e.target.value)}/>
            <div id = 'recaptcha'></div>
            <VerifyButton onClick = {(e) => verifyNumber(e) }>Verify</VerifyButton>
            
          </SignUpContents2>
        </SignUpCardServices>
      </SignUpCardContainer>
    </div>
  );
}
