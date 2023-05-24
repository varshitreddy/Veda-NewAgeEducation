import React, { useState } from 'react'
import './styles.css'
import { Button, TextField } from '@mui/material'
import Signup from '../Signup/Signup';
const Login = () => {

  const [loading, setLoading] = useState(false);
  const [showSignUp,setShowSignUp] = useState(false);

  const toggleSignUp = ()=>{
    setLoading(true);

    setTimeout(()=>{
      setLoading(false);
      setShowSignUp(true);
    },1500)
    
  }
  return (
    <div className='login'>
      {showSignUp ?(
        <Signup setShowSignUp={setShowSignUp}/>
      ):(
          <div className='login__content'>
              {loading && <div className='login__loading'/>}
                <div className={`login__wrapper ${loading && "login__fade"}`}>
                   <img className='login__logo'
                     src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
                      alt='google'/>
                       <p className='login__title'>
                            Sign In
                          </p>
                          <p className='login__subtitle'>
                            Continue to Gmail
                          </p>
                          <form className='login__form'>
                            <TextField 
                                id='outlined-basic'
                                label="Email"
                                variant='outlined'
                                className='login__input'
                                type='email'/>

                              <TextField 
                              id='outlined-basic'
                              label="Password"
                              variant='outlined'
                              className='login__input'
                              type='password'/>   


                              < div className='login__infoText'>
                                Not your computer? Use guest mode to sign in privately?
                                <a href='/learnmore'>Learn More</a>
                              </div>  

                              <div className='login__buttons'>
                                <Button onClick={toggleSignUp}
                                className='login__button'
                                color='primary'
                                >
                                  Create Account
                                </Button>

                                <Button className='login__button'
                                color='primary'
                                variant='contained'>
                                  Sign In
                                </Button>

                              </div>                   
                          </form>
                    </div>
                  </div>


      )}
        
    </div>
  )
}

export default Login