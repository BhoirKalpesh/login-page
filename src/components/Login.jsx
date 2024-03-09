import React, {useState} from 'react'
import './login.css'


function Login() {
  
  const [signin, setSignIn]=useState(true);
  const [signup, setSignUp]=useState(false);

  function handleClick() {
    setSignIn(!signin);
    setSignUp(!signup);
  }
  
  return (
    <div className='container'>
        <div className='main'>
            <div className='login'>
                <div className='login-title'>Sign In</div>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Password'/>
                <div className="forgetpassword">Forget Your Password?</div>
                <button>Sign In</button>
            </div>
            <div className="signup">
                <div className='heading'>Welcome, Friend!</div>
                <button>Sign Up</button>
            </div>

        </div>
    </div>
  )
}

export default Login