import React from 'react';
import BusPass from '../../components/buspass/BusPass.component';
import './BusPassPage.styles.scss';

class BusPassPage extends React.Component {
     
  render() {
     return(
         <div className='BusPassPage'>
             <BusPass />
             </div>

      );
     }  
}
export default BusPassPage;