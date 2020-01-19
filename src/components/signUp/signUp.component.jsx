import React from 'react';
import CustomInput from '../customInput/customInput.component';
import './signUp.styles.scss';

const SignUp = () => (
     <div className='signupBody'>

     <div className='title'>
     <h1>SignUp</h1>
     <span>*Sign up with following details</span>
     </div>

     <div className='signUp'>
       <form className='details'>

        <label>Enter Name</label>
       <CustomInput
         type='text'
         name='First Name'
         placeholder='First Name'
         required
       />

        <CustomInput
         type='text'
         name='Middle Name'
         placeholder='Middle Name'
         required
       />

       <CustomInput
         type='text'
         name='Last Name'
         placeholder='Last Name'
         required
       />

       <label>Email</label>
       <CustomInput
        type='email'
        name='Email'
        placeholder='example@xyz.com'
        required
       />
       <label>Password</label>
       <CustomInput
         type='password'
         name='Password'
         placeholder='Password'
         required
       />

       <CustomInput
         type='password'
         name='confirm password'
         placeholder='Confirm password'
         required
       />
       <button className='button'>Sign Up</button>
       </form>
     </div>


     </div>
	);

export default SignUp;
