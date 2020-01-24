import React, { Component } from 'react';
import CustomInput from '../customInput/customInput.component';
import './step1.styles.scss';


export class Step1 extends React.Component{

	constructor() {
	 super();
	 this.state =  {
		  Fullname : '',
      Enrollment : '',
      CollegeName : '',
      CollegeCode : '',
      BranchName : '',
      BranchCode : '',
      Semister : '',
      Mobile : '',
      Email : ''
	 };
	}

	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	}

// Hii brother ahi is handlechange nu kari deje ne
// Hii brother ahi is handlechange nu kari deje ne
// Hii brother ahi is handlechange nu kari deje ne

   render() {
			return (
    	<div className='step1'>
			<span className='title'><h2>Personal Infomation</h2></span>
		 <form className='form' onSubmit={this.continue}>
		 <lable>FullName</lable>
		 <CustomInput
			className='fullname'
			type='text'
			name='fullName'
		 placeholder='Full Name'
			required
		 /><br/>
		 <lable>Enrollment No.</lable>
		 <CustomInput
			className='enroll'
			type='text'
			name='Enrollment'
		 placeholder='Enrollment No'
			required
		 /><br/>

		<div className='college'>
		 <lable>College Name</lable>
		 <CustomInput
			className='collegename'
			type='text'
			name='college'
		 placeholder='College Name'
			required
		 />
		 <lable>College Code</lable>
		 <CustomInput
			className='collegecode'
			type='number'
			name='college'
		 placeholder='College Code'
			required
		 />
		</div><br/>

		<div className='branch'>
		 <lable>Branch</lable>
		 <CustomInput
			className='branchname'
			type='text'
			name='collegeAddress'
		 placeholder='Branch'
			required
		 />
		 <lable>Branch Code</lable>
		 <CustomInput
			className='branchcode'
			type='number'
			name='branchCode'
		 placeholder='Branch Code'
			required
		 />
		</div><br/>

	 <div className='sem_mob'>
		 <lable>Semister</lable>
		 <CustomInput
			className='sem'
			type='number'
			name='Sem'
		 placeholder='Semister'
			required
		 />
		 <lable>Mobile No.</lable>
		 <CustomInput
			className='mobile'
			type='number'
			name='college'
		 placeholder='Mobile No.'
			required
		 />
		 </div><br/>

		<lable>Email Address</lable>
		 <CustomInput
			className='email'
			type='email'
			name='email'
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
