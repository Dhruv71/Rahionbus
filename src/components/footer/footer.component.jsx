import React from 'react';
import CustomInput from '../customInput/customInput.component';
import facebook from './facebook.png';
import instagram from './instagram.png';
import googlePlus from './google-plus.png';
import linkedIn from './linkedin.png'; 
import './footer.styles.scss';

class Footer  extends React.Component {
   constructor()
   { super();
     
     this.state = {
     	email : ''
     };
    }

    handelSubmit = event => {
    	event.preventDefault();
    	this.setState({email : ''});
    };

    handelChange = event => {
    	const {value,name} = event.target;
    	this.setState({[name]: value});
    };

   render(){
   return(  
     <div className='footer'>
       <div className='subScribe'>
        <div >
         <pre>SubScribe our site for latest update</pre>
        </div>
       <form  onSubmit={this.handelSubmit} >
        <div className='form'>
       <CustomInput
        className='email' 
        name='email'
        type='email'
        placeholder='example@xyz.com'
        value={this.state.email}
        handelChange={this.handelChange}
        required />
        <button type='submit'>SubScribe</button>
        </div> 
         </form>
        </div>
       <div className='follow'>
          <p>Follow Us</p>
          <div className='social'>
            <span><img src={facebook} alt='logo'></img> Facebook</span>
            <span><img src={instagram} alt='logo'></img>Instagram</span> 
            <span><img src={googlePlus} alt='logo'></img> Google+</span>
            <span><img src={linkedIn} alt='logo'></img>Linked In</span>
          </div>
       </div> 
     </div>
     )
	};
}

export default Footer;