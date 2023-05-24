import React, { useState } from 'react'
import "./styles.css";
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";





const initialFormData = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword:""
};



const Signup = ({setShowSignUp}) => {
  const[loading, setLoading] = useState(false);
  const[formData, setFormData] = useState(initialFormData);
  const[checked,setChecked] = useState(false);
  const[passwordError,setPasswordError] = useState({state:false,msg:''});
  const[emailError, setEmailError] = useState({state:false,msg:''});


  const toggleSignUp=()=>{
    setLoading(true);
   
    setTimeout(()=>{
      setLoading(false);
      setShowSignUp(false);
    },1500)
  };

  const createAccount = (e)=>{
    e.preventDefault();
    setLoading(true);
    const error = formData.password === formData.confirmPassword

    if(!error){
          setPasswordError({state:true,msg:"Passwords do not match"})
          setFormData({ ...formData, confirmPassword: ""});
          setLoading(false);
          return;
    } else{
      setPasswordError({state:false, msg:""});
      setEmailError({state:false, msg:""});
    }
    


const auth = getAuth();
signInWithEmailAndPassword(auth, formData.email, formData.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  };
  return (
    <div className='signup__container'>
      <div className={`signup ${loading && "login__fade" }`}>
        {loading && <div className='login__loading signup__loading'/>}

        <div className='signup__container'>
          <div className='signup__left'>
            <img className='login__logo'
              src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
              alt='google'/>
              <h1 className='signup__heading'>
                Create your Google Account
              </h1>
              <p className='signup__subheading'>
                Continue to Gmail
              </p>
              <div className='signup__inputs'>
                <div className='signup__nameInputs'>
                  <TextField id='outline-basic'
                  label='First Name'
                  type='name'
                  variant='outlined'
                  className='signup__nameInput'
                  value={formData.firstname}
                  onChange={(e)=>{
                    setFormData({
                      ...formData,
                      firstname:e.target.value,

                    });
                  }}/>
                  <TextField id='outline-basic'
                  label='Last Name'
                  type='name'
                  variant='outlined'
                  className='signup__nameInput'
                  value={formData.lastname}
                  onChange={(e)=>{
                    setFormData({
                      ...formData,
                      lastname:e.target.value,

                    });
                  }}/>
                </div>
                <TextField id='outline-basic'
                  label='Email'
                  type='Email'
                  fullWidth
                  variant='outlined'
                  value={formData.email}
                  onChange={(e)=>{
                    setFormData({
                      ...formData,
                      email:e.target.value,

                    });
                  }}
                  helperText="You can use letters, numbers & periods"
                  />
                  <div className='signup__passwordInputs'>
                    <div className='signup__passwordWrapper'>
                    <TextField id='outline-basic'
                  label='Password'
                  type={checked ? 'text' : 'password'}
                  variant='outlined'
                  className='signup__passwordInputs'
                  value={formData.password}
                  onChange={(e)=>{
                    setFormData({
                      ...formData,
                      password:e.target.value,

                    });
                  }}/>
                  <TextField id='outline-basic'
                  label='Confirm Password'
                  type={checked ? 'text' : 'password'}
                  variant='outlined'
                  className='signup__passwordInputs'
                  value={formData.confirmPassword}
                  onChange={(e)=>{
                    setFormData({
                      ...formData,
                      confirmPassword:e.target.value,

                    });
                  }}/>
                    </div>
                    <p className='signup__helpertext'>
                      use 8 or more characters with a mix of letters,
                       numbers & symbols
                    </p>

                    <FormControlLabel 
                    
                    control={
                       <Checkbox checked={checked} color="primary" 
                        onClick={()=>setChecked(!checked)}/>
                       }
                    label="Show Password"/>
                  </div>
                  <div className='signup__buttons'>
                    <Button onClick={toggleSignUp}
                    className='signup__button'
                    variant='text'
                    color='primary'
                    >Sign in instead</Button>

                    <Button className='signup__button'
                    variant='contained'
                    color='primary'
                    onClick={createAccount}
                    > create</Button>
                  </div>
              </div>
          </div>
          <figure className='signup__figure'>
            <img className='signup__figureImg'
            src='https://ssl.gstatic.com/accounts/signup/glif/account.svg'
            alt='account'/>
            <figcaption className='signup__figcaption'>
              One Account. All of google working for you
            </figcaption>
          </figure>
        </div>
      </div>        
    </div>
  )
}

export default Signup