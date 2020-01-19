import React from 'react';
import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/signUp.component';
import './signIn_and_signUp_page.styles.scss';
import shape5 from '../../shape/shape5.png';
import shape4 from '../../shape/shape4.png';

const SigninAndSignupPage = () => (
   <div className='SigninAndSignupPage'>
      <div className="in_up_box">
       <SignIn/>
       <SignUp/>
       <img src={shape5} alt='shape' className='shape5'/>
       <img src={shape4} alt='shape' className='shape4'/>
      </div>
   </div>

	);

export default SigninAndSignupPage;
