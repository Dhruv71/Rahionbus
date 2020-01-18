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
      placeholder='  example@xyz.com'
      value={this.state.email}
      handelChange={this.handelChange}
      required />
      <button className="subbutton" type='submit'>SubScribe</button>
      </div>
       </form>
      </div>

       <div className='social'>
          <img className='icon' src={facebook} alt='user' width='32px' height='32px' />
          <span className='facebook'>Facebook</span>
          <img className='icon' src={twitter} alt='user' width='32px' height='32px' />
          <span className='twitter'>Twitter</span>
          <img className='icon' src={google} alt='user' width='32px' height='32px' />
          <span className='google+'>Google+</span>
          <img className='icon' src={link} alt='user' width='32px' height='32px' />
          <span className='Linkedin'>Linkedin</span>
       </div>
     </div>
	)
};
}

export default Footer;
