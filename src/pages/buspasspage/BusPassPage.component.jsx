import React from 'react';
import Step1 from '../../components/buspass/step1.component';
import Step2 from '../../components/buspass/step2.component';
import './BusPassPage.styles.scss';

class BusPassPage extends React.Component {

state = {
  step : 1,
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

  render() {
      const { step } = this.state;

      switch (step) {
       case 1:
               return(
                   <div className='BusPassPage'>
                     <div className="stepsBox">
                       <Step1
                       nextStep={ this.nextStep }
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
