import React from 'react';
import './signIn.styles.scss';
import CustomInput from '../customInput/customInput.component';

const SignIn = () => (
      <div className='signIn'>
       <h1>SIGN IN</h1>
       <span>sign in with your existed email and password</span><br/>
       <form>
       <label>Email</label>
       <CustomInput 
         type='email'
         name='email'
         //value={this.state.email}
         placeholder='example@gmail.com' 
         required
        /><br/>
        <label>Password</label>
       <CustomInput
        type='password'
        name='password'
        //value={this.state.password}
        required
       />
       <button className=''>Sign In</button>
       </form>
      </div>
	);

export default SignIn;	 