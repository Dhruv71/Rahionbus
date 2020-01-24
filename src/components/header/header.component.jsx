import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
     <div className='header'>
       <div className='logo'>GSRTC</div>
       <div className='options'>
          <Link to='/' className='optionh' >
          <span className='option'>HOME</span>
          </Link>
          <span className='option'>ROUTES</span>
          <span className='option'>ABOUT US</span>
          <Link to='signin'>
          <button className='button'>Sign In</button>
          </Link>
       </div>
     </div>
	);

export default Header;
