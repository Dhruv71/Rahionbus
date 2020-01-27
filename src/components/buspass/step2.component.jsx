import React from 'react';
import CustomInput from '../customInput/customInput.component';
import './step2.styles.scss';
export class Step2 extends React.Component{

constructor() {
super();
this.state =  {
};
}

continue = e => {
e.preventDefault();
this.props.nextStep();

};

back = e => {
e.preventDefault();
this.props.prevStep();
}

render() {
  const {handleChange,values} = this.props;
return (
<div className='step2'>
  <span className='title'><h2>Documents verification</h2></span>
  <form className='form' onSubmit={this.continue}>
    <div className='date'>
      <lable>Start Date</lable>
      <CustomInput
      className='buspassDate'
      type='date'
      name='StartDate'
      onChange={handleChange('StartDate')}
      value={values.StartDate}
      required
      />
      <lable>End Date</lable>
      <CustomInput
      className='buspassDate'
      type='date'
      name='EndDate'
      value={values.EndDate}
      onChange={handleChange('EndDate')}
      required
      />
    </div>
    <br/>
    <div className='s_to_d'>
      <lable>Source</lable>
      <CustomInput
      className='source_den'
      type='text'
      name='Source'
      value={values.Source}
      onChange={handleChange('Source')}
      placeholder='Source'
      required
      />
      <lable>Destination</lable>
      <CustomInput
      className='source_den'
      type='text'
      name='Destination'
      onChange={handleChange('Destination')}
      value={values.Destination}
      placeholder='Destination'
      required
      />
    </div>
    <br/>
    <lable>Distance(km)</lable>
    <CustomInput
    className='Distance'
    type='number'
    name='Distance'
    onChange={handleChange('Distance')}
    value={values.Distance}
    placeholder='Distance'
    required
    />
    <button className="button_next">Next</button>
    <button className="button_back" onClick={this.back} >Back</button>
  </form>
</div>
);
}
}
export default Step2;