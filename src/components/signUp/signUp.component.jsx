import React from 'react';
import CustomInput from '../customInput/customInput.component';
import './signUp.styles.scss';

const SignUp = () => (
     <div className='signUp'>
       <h1>SIGN UP</h1>
       <span>sign up with following details</span> 
       <form>
       <CustomInput
         type='text'
         name='First Name'
         required
       />
        <CustomInput
         type='text'
         name='Middle Name'
         required
       />
       <CustomInput
         type='text'
         name='Last Name'
         required
       />
       <CustomInput
        type='email'
        name='Email'
        required
       />
       <CustomInput
         type='password'
         name='Password'
         required
       />
       <button>Sign Up</button>
       </form>
     </div>
	);

export default SignUp;