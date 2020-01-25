import React from 'react';
import Step1 from '../../components/buspass/step1.component';
import Step2 from '../../components/buspass/step2.component';
import './BusPassPage.styles.scss';

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
Email : '',

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
      const {FullName,BranchCode,BranchName,Email,CollegeName,CollegeCode,
              Enrollment,Semister,Mobile,EmailError } = this.state;
      const values = {FullName,BranchCode,BranchName,Email,CollegeName,CollegeCode,
              Enrollment,Semister,Mobile,EmailError } ; 
      
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
               />
            </div>
           </div>
        );
        case 3:
         return <h1>welcome to secure payment!</h1>
     }


  }
}
export default BusPassPage;
