import React from 'react';
import CustomInput from '../../components/customInput/customInput.component';
import CardList from '../../components/cardlist/cardlist.component';
import './homepage.styles.scss';

 class  Homepage extends React.Component {
   constructor() {
    super();

    this.state = {
    	source : '',
    	destination : ''
    };
   }

   handelChange = event => {
     const {value,name} = event.target;
     this.setState({ [name] : value });
   };

   handelSubmit = event => {
     event.preventDefault();
     this.setState({source : '', destination : ''})
   }

  render () {
 	return (
 	      <div className='homepage'>
    <div className='item-container'>
    <div className='headtext'>Welcome To GSRTC</div>
    <div className='subtext'>lorem is the most used dumy text in sublime text. But todays world is
        not about the<br/> onlysite.It's now a more than web.I hope this ismake some
        sense of online portal.</div>
    <h2 className='findroutes'>Find Routes</h2>
     <form onSubmit={this.handelSubmit}>
      <CustomInput
       name='source'
       type='text'
       value={this.state.source}
       label='source'
       placeholder='source'
       handelChange={this.handelChange}
       required
      />
      <CustomInput
       name='destination'
       type='text'
       placeholder='destination'
       value={this.state.destination}
       label='destination'
       handelChange={this.handelChange}
       required
      />
      <CustomInput
       type='submit'
        />
     </form>
     <CardList/>

     <div className='about'>
       <h1>About Us</h1>

       <p>All Tesla vehicles are produced at its factory in Fremont, California, where the vast majority of vehicle’s components are also made
       To achieve our goal of having the safest factories in the world, Tesla
          is taking a proactive approach to safety, requiring production employees
       All Tesla vehicles are produced At its factory in Fremont, California,
          where the vast majority of the vehicle’s components are also made.
          To achieve our goal of having the safest factories in the world, Tesla
          is taking a proactive approach to safety, requiring production employees
          to participate in a multi-day training program before ever setting foot
           on the factory floor. From there, Tesla continues to provide on-the-job
          training and track performance daily so that improvements can be made
           quickly. The result is that Tesla’s safety rate continues to improve
          is taking a proactive approach to safety, requiring production employees
            while Model 3 production ramps.</p>
    </div>
    </div>
    </div>

  );
};
}
 export default Homepage;
