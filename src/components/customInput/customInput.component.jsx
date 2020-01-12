import React from 'react';
import './customInput.styles.scss';

const CustomInput = ({handelChange, ...props}) =>(
         <div className='search' >
         <input className='custom-input' onChange= {handelChange} {...props} />

         </div>
	);

export default CustomInput;