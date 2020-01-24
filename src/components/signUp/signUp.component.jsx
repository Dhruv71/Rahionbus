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
         className='signupName'
         type='text'
         name='First Name'
         placeholder='First Name'
         required
       />

        <CustomInput
         className='signupName'
         type='text'
         name='Middle Name'
         placeholder='Middle Name'
         required
       />

       <CustomInput
         className='signupName'
         type='text'
         name='Last Name'
         placeholder='Last Name'
         required
       />

       <label>Email</label>
       <CustomInput
       className='signupEmail'
        type='email'
        name='Email'
        placeholder='example@xyz.com'
        required
       />
       <label>Password</label>
       <CustomInput
         className='signupPass'
         type='password'
         name='Password'
         placeholder='Password'
         required
       />

       <CustomInput
         className='signupPass'
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
