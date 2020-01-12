import React from 'react';
import './card.styles.scss';

export const Card = ({image,title}) => (
      <div className='card'>
        <image src={image} alt={title} />
        <span className={title}>{title}</span>
      </div>
	)