import React from 'react';
import './signIn.styles.scss';
import CustomInput from '../customInput/customInput.component';

const SignIn = () => (
      <div className='signinBody'>

      <div className='title'>
      <h1>Login</h1>
      <span>*Sign in with your existed email and password</span><br/>
      </div>

      <div className='signIn'>
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
        placeholder="Password"
        //value={this.state.password}
        required
       />
       </form>

       <a href="#"> forget password?</a>
       <button className='button'>Login</button>
      </div>

      <div className='logo'>
        <h1>GSRTC</h1>
        <h6>Develop by Rahi Group</h6>
        </div>

      </div>
	);

export default SignIn;
