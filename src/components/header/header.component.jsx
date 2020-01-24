import React from 'react';
import './header.styles.scss';

const Header = () => (
     <div className='header'>
       <div className='logo'>GSRTC</div>
       <div className='options'>
          <span className='option'>HOME</span>
          <span className='option'>ROUTES</span>
          <span className='option'>ABOUT US</span>
          <button className='button'>Sign In</button>

       </div>
     </div>
	);

export default Header;
