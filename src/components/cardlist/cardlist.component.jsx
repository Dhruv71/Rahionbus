import React from 'react';
import './cardlist.styles.scss';
import {Cardlist} from './cardlist_data';
//import {Card} from '../card/card.component';
import ticket from './ticket.png';
import route from './route.png';
import pass from './pass.png';

 const CardList = () => (
        
       <div className='cardlist'>
         <div className='card'>
         <img src={ticket} alt='ticket'width='200px' height='200px'/>
        <button className="button"> Book Tickets </button>
        <span className='title'>{Cardlist[0].title}</span>
          <div className='content'>{Cardlist[0].content}</div>
        </div>
        <div className='card'>
         <img src={route} alt='route' width='200px' height='200px'/>
         <button className="button"> Routes </button>
         <span className='title'>{Cardlist[1].title}</span>
          <div className='content'>{Cardlist[1].content}</div>
        </div>
        <div className='card'>
         <img src={pass} alt='pass' width='200px' height='200px'/>
        <button className="button"> Bus Pass </button>
         <span className='title'>{Cardlist[2].title}</span>
          <div className='content'>{Cardlist[2].content}</div>
        </div>
       </div>
	);

export default CardList;
