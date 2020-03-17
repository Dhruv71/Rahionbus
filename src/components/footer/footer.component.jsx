import React from 'react';
import CustomInput from '../customInput/customInput.component';
import link from './icon/facebook.png';
import google from './icon/google+.png';
import facebook from './icon/linkedin.png';
import twitter from './icon/twitter.png';
import './footer.style.scss';


class Footer  extends React.Component {
   constructor()
   { super();

     this.state = {
     	email : '',
      isSubscribed : false
     };
    }


    handelSubmit = event => {
    	event.preventDefault();
    	this.setState({
        email : '',
        isSubscribed : !this.state.isSubscribed 
          });
    };

    handelChange = event => {
    	const {value,name} = event.target;
    	this.setState({[name]: value});
    };

   render(){
   return(
     <div className='footer'>

     <div className='rightside'>
     <div className='logo'>
       <h1>GSRTC</h1>
       <p>GSRTC provide online bus pass service in Gujarat, also in this we provide Bus Routes, online book tickets.
       Enjoy Fast, Secure and amazing service of GSRTC. This web site develop by RAHI GROUP. We inspire the future. 
          </p>
          <h5>© 2020 Rahi Group All Rights Recived</h5>
       </div>
      </div>

     <div className='leftside'>
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
      <button className="subbutton" type='submit'>SubScribe</button>
      </div>
       </form>

       <div className='social'>
          <img className='icon' src={facebook} alt='user' width='24px' height='24px' />
          <span className='facebook'>Linkedin</span>
          <img className='icon' src={twitter} alt='user' width='24px' height='24px' />
          <span className='twitter'>Twitter</span>
          <img className='icon' src={google} alt='user' width='24px' height='24px' />
          <span className='google+'>Google+</span>
          <img className='icon' src={link} alt='user' width='24px' height='24px' />
          <span className='Linkedin'>Facebook</span>
       </div>

      </div>
      </div>

     </div>
	)
};
}

export default Footer;
