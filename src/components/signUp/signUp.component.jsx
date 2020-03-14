import React from 'react';
import CustomInput from '../customInput/customInput.component';
import './signUp.styles.scss';
class SignUp extends React.Component
{
  constructor(props)
  {
  	super(props);

  	this.state = {
          
          FirstName : '',
          MiddleName : '',
          LastName : '',
          email : '',
          password : '',
          confirmpassword : ''
  	};
  }

handleChange = e =>
  { 
  	const{name,value} = e.target;
  	this.setState({[name] : value} );

  };

  handelSubmit = e => 
  { 
  	e.preventDefault();
  	const {password,confirmpassword,FirstName,MiddleName,LastName} = this.state;
  	if(password != confirmpassword)
  	{
  		alert("password does not match! please enter valid password");
  		return;
  	}
  	this.setState(
  		 {FirstName : '',
          MiddleName : '',
          LastName : '',
          email : '',
          password : '',
          confirmpassword : ''});
  }

 render() {
return (
<div className='signupBody'>
	<div className='title'>
		<h1>SignUp</h1>
		<span>*Sign up with following details</span>
	</div>
	<div className='signUp'>
		<form className='details' onSubmit={this.handelSubmit}>
			<label>Enter Name</label>
			<CustomInput
			className='signupName'
			type='text'
			name='FirstName'
			value= {this.state.FirstName}
			onChange={this.handleChange}
			placeholder='FirstName'
			required
			/>
			<CustomInput
			className='signupName'
			type='text'
			name='MiddleName'
			value= {this.state.MiddleName}
			onChange={this.handleChange}
			placeholder='MiddleName'
			required
			/>
			<CustomInput
			className='signupName'
			type='text'
			name='LastName'
			value= {this.state.LastName}
			onChange={this.handleChange}
			placeholder='LastName'
			required
			/>
			<label>Email</label>
			<CustomInput
			className='signupEmail'
			type='email'
			name='email'
			value= {this.state.email}
			onChange={this.handleChange}
			placeholder='example@xyz.com'
			required
			/>
			<label>Password</label>
			<CustomInput
			className='signupPass'
			type='password'
			name='password'
			value= {this.state.password}
			onChange={this.handleChange}
			placeholder='Password'
			required
			/>
			<CustomInput
			className='signupPass'
			type='password'
			name='confirmpassword'
			value= {this.state.confirmpassword}
			onChange={this.handleChange}
			placeholder='Confirm password'
			required
			/>
			<button className='button'>Sign Up</button>
		</form>
	</div>
</div>
);
}
}
export default SignUp;