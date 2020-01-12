import React from 'react';
import login from './login.png';
import './header.styles.scss';

const Header = () => (
     <div className='header'>
       <div className='logo'>GSRTC</div>
       <div className='options'>
          <span className='option'>HOME</span>
          <span className='option'>ROUTES</span>
          <span className='option'>ABOUT US</span>
          <img className='option' src={login} alt='user' width='64px' height='64px' />
       </div>
     </div>
	);

export default Header;