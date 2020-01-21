import React from 'react';
import CustomInput from '../../components/customInput/customInput.component';
import './BusPassPage.styles.scss';

const BusPassPage = () => (
     <div className='BusPassPage'>

       <div className='buspassForm'>
        <span className='buspassTitle'><h2>BUS PASS</h2></span>
       <form>
       <lable>FullName</lable>
       <CustomInput
        className='buspassName'
        type='text'
        name='fullName'
        required
       />
       <lable>Address</lable>
       <CustomInput
        className='buspassAddress'
        type='text'
        name='address'
        required
       />
       <lable>College Name</lable>
       <CustomInput
        className='buspassCollege'
        type='text'
        name='college'
        required
       />
       <lable>College Code</lable>
       <CustomInput
        className='buspassCollege'
        type='numbr'
        name='college'
        required
       />
       <lable>College Address</lable>
       <CustomInput
        className='buspassCollegeAddress'
        type='text'
        name='collegeAddress'
        required
       />
       <lable>Branch Code</lable>
       <CustomInput
        className='buspassBranchCode'
        type='number'
        name='branchCode'
        required
       />
       <lable>Semister</lable>
       <CustomInput
        className='buspassSem'
        type='number'
        name='Sem'
        required
       />
       <lable>Enrollment Num</lable>
       <CustomInput
        className='buspassCollege'
        type='number'
        name='college'
        required
       />
       <lable>Start Date</lable>
       <CustomInput
        className='buspassDate'
        type='date'
        name='StartDate'
        required
       />
       <lable>End Date</lable>
       <CustomInput
        className='buspassDate'
        type='date'
        name='EndDate'
        required
       />
       <lable>Distance(km)</lable>
       <CustomInput
        className='buspassDistance'
        type='number'
        name='Number'
        required
       />
       <lable>Source</lable>
       <CustomInput
        className='buspassDestination'
        type='text'
        name='Source'
        required
       />
       <lable>Destination</lable>
       <CustomInput
        className='buspassSource'
        type='text'
        name='Destination'
        required
       />
       <button>Submit</button>
       </form>
       </div>
     </div>
	);

export default BusPassPage;