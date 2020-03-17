import React from 'react';
import Step1 from '../../components/buspass/step1.component';
import Step2 from '../../components/buspass/step2.component';
import './BusPassPage.styles.scss';

const KM = 7;

class BusPassPage extends React.Component {

constructor(){
  super();

this.state = {

step : 1,
FullName : '',
Enrollment : '',
CollegeName : '',
CollegeCode : '',
BranchName : '',
BranchCode : '',
Semister : '',
Mobile : '',
email : '',
StartDate : '',
EndDate : '',
Source : '',
Destination : '',
Distance : ''

}
}
//proceed to NEXT step
nextStep = () => {
  const { step } = this.state;
  this.setState({
    step : step + 1
  });
}

//proceed to BACK step
prevStep = () => {
  const { step } = this.state;
  this.setState({
    step : step - 1
  });
}
handleChange = name => event => {
   this.setState({ [name] : event.target.value });
}

  render() {

      const { step } = this.state;
      const {FullName,BranchCode,BranchName,email,CollegeName,CollegeCode,
              Enrollment,Semister,Mobile,StartDate,EndDate,Source,Destination,Distance } = this.state;
      const values = {FullName,BranchCode,BranchName,email,CollegeName,CollegeCode,

              Enrollment,Semister,Mobile,StartDate,EndDate,Source,Destination,Distance }; 
      
      switch (step) {
       case 1:
               return(
                   <div className='BusPassPage'>
                     <div className="stepsBox">
                       <Step1
                       nextStep={ this.nextStep }
                        values = {values}
                        handleChange = {this.handleChange}
                       />
                    </div>
                   </div>
                );
       case 2:
       return(
           <div className='BusPassPage'>
             <div className="stepsBox">
               <Step2
               prevStep={ this.prevStep }
               nextStep={ this.nextStep }
               handleChange= { this.handleChange }
               values = {values}
               />
            </div>
           </div>
        );
        case 3:
         return(
         <div className='payment' style={{minHeight:'50vh', padding:'50px', marginTop:'90px'}}>    
         <h1>welcome to secure payment!</h1>
         <h1>Total amount is : ₹{Distance*KM}</h1>
         </div>
         );
     }

  }
}

export default BusPassPage;
