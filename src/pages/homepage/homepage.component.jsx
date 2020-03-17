import React from 'react';
import CustomInput from '../../components/customInput/customInput.component';
import CardList from '../../components/cardlist/cardlist.component';
import { AboutUs } from '../../components/aboutUs/aboutUs.component';
import shape1 from '../../shape/shape1.png';
import shape2 from '../../shape/shape2.png';
import shape5 from '../../shape/shape5.png';
import shape4 from '../../shape/shape4.png';
import './homepage.styles.scss';
class  Homepage extends React.Component {
constructor() {
super();
this.state = {
source : '',
destination : ''
};
}
handelChange = event => {
const {value,name} = event.target;
this.setState({ [name] : value });
};
handelSubmit = event => {
event.preventDefault();
this.setState({source : '', destination : ''})
}
render () {
return (
<div className='homepage'>
  <div className='item-container'>
    <div className='headtext'>Welcome To GSRTC</div>
    <div className='subtext'>lorem is the most used dumy text in sublime text. But todays world is
      not about the<br/> onlysite.It's now a more than web.I hope this ismake some
    sense of online portal.</div>
    <img src={shape1} alt='shape' className='shape1'/>
    <h2 className='findroutes'>Find Routes</h2>
    <img src={shape2} alt='shape' className='shape2'/>
    <form onSubmit={this.handelSubmit}>
      <CustomInput
      className='source'
      name='source'
      type='text'
      value={this.state.source}
      label='source'
      placeholder='source'
      handelChange={this.handelChange}
      required
      />
      <CustomInput
      className='destination'
      name='destination'
      type='text'
      placeholder='destination'
      value={this.state.destination}
      label='destination'
      handelChange={this.handelChange}
      required
      />
      <CustomInput
      type='submit'
      className='found'
      />
    </form>
    <CardList/>
    <img src={shape5} alt='shape' className='shape5'/>
      <div className='about'>
    <AboutUs />
      </div>
  </div>
    <img src={shape4} alt='shape' className='shape4'/>
  </div>
  );
  };
  }
export default Homepage;
