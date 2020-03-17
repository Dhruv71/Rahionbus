import React from 'react';
import './signIn.styles.scss';
import isEmail from 'validator/lib/isEmail';
import CustomInput from '../customInput/customInput.component';

class SignIn extends React.Component{
 constructor(props)
 {
    super(props);

    this.state = {
    	email : '',
    	password : ''
    }
 }

  handleChange = name => e =>
  { 
  	
  	this.setState({[name] : e.target.value} );

  };

  handelSubmit = e => 
  {
  	e.preventDefault();
  	const {email,password} = this.state;
  	if(!isEmail(email))
  	{
       alert("please enter email in valid form");
       return;
  	}
  	else if (password.length < 8 ) 
  	{
  		alert("please enter strong password of 8 character,symbol and number!");
  		return;
  	}
  	this.setState({email : '', password : ''});
  }

 render()
 {
 	return(
      <div className='signinBody'>

      <div className='title'>
      <h1>Login</h1>
      <span>*Sign in with your existed email and password</span><br/>
      </div>

      <div className='signIn'>
       <form onSubmit={this.handelSubmit}>
       <label>Email</label>
       <CustomInput
         className='signinEmail'
         type='email'
         name='email'
         value={this.state.email}
         onChange = {this.handleChange('email')}
         placeholder='example@gmail.com'
         required
        /><br/>
        <label>Password</label>
       <CustomInput
       className='signinPass'
        type='password'
        name='password'
        placeholder="Password"
        value={this.state.password}
        onChange = {this.handleChange('password')}
        required
       />
       <a href="#" className='forgetpass'> forget password?</a>
       <button className='button'>Login</button>
       </form>
     </div>

      <div className='logo'>
        <h1>GSRTC</h1>
        <h6>Develop by Rahi Group</h6>
      </div>

      </div>

	);
  }
}


export default SignIn;
