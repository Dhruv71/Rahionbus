import React from 'react';
import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/signUp.component';
import './signIn_and_signUp_page.styles.scss';

const SigninAndSignupPage = () => (
   <div className='SigninAndSignupPage'>
      <SignIn />
      <SignUp />
   </div> 

	);

export default SigninAndSignupPage;