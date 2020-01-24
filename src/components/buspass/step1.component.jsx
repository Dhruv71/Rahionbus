import React from 'react';
import CustomInput from '../customInput/customInput.component';
import './step1.styles.scss';
export class Step1 extends React.Component{
constructor() {
super();
this.state =  {

};
}

handelSubmit = e => {
e.preventDefault();   
this.props.nextStep() 
};


render() {
const { handleChange,values } = this.props;

return (
    
<div className='step1'>
	<span className='title'><h2>Personal Infomation</h2></span>
	<form className='form' onSubmit={this.handelSubmit}>
		<lable>FullName</lable>
		<CustomInput
		className='fullname'
		type='text'
		name='FullName'
		value={values.FullName}
		onChange={handleChange('FullName')}
		placeholder='Full Name'
		required
		/><br/>
	<lable>Enrollment No.</lable>
		<CustomInput
		className='enroll'
		type='text'
		name='Enrollment'
		value={values.Enrollment}
		onChange={handleChange('Enrollment')}
		placeholder='Enrollment No'
		required
		/><br/>
		<div className='college'>
			<lable>College Name</lable>
			<CustomInput
			className='collegename'
			type='text'
			name='CollegeName'
			value={values.CollegeName}
			onChange={handleChange('CollegeName')}
			placeholder='College Name'
			required
			/>
			<lable>College Code</lable>
			<CustomInput
			className='collegecode'
			type='number'
			name='CollegeCode'
			value={values.CollegeCode}
			onChange={handleChange('CollegeCode')}
			placeholder='College Code'
			required
			/>
		</div><br/>
		<div className='branch'>
			<lable>Branch</lable>
			<CustomInput
			className='branchname'
			type='text'
			name='BranchName'
			value={values.BranchName}
			onChange={handleChange('BranchName')}
			placeholder='Branch'
			required
			/>
			<lable>Branch Code</lable>
			<CustomInput
			className='branchcode'
			type='number'
			name='BranchCode'
			value={values.BranchCode}
			onChange={handleChange('BranchCode')}
			placeholder='Branch Code'
			required
			/>
		</div><br/>
		<div className='sem_mob'>
			<lable>Semister</lable>
			<CustomInput
			className='sem'
			type='number'
			name='Semister'
			value={values.Semister}
			onChange={handleChange('Semister')}
			placeholder='Semister'
			required
			/>
     		<lable>Mobile No.</lable>
			<CustomInput
			className='mobile'
			type='number'
			name='Mobile'
			value={values.Mobile}
			onChange={handleChange('Mobile')}
			placeholder='Mobile No.'
			required
			/>
		</div><br/>
		<lable>Email Address</lable>
		<CustomInput
		className='email'
		type='email'
		name='Email'
		value={values.Email}
		onChange={handleChange('Email')}
		placeholder='example123@gmail.com'
		required
		/> 
		<button className="button" >Next</button>
	</form>
</div>
);
}
}
export default Step1;