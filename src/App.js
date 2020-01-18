import React from 'react';
import Homepage from './pages/homepage/homepage.component.jsx';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import shape1 from './shape/shape1.png';
import shape2 from './shape/shape2.png';
import shape5 from './shape/shape5.png';
import './App.scss';

function App() {
  return (
    <div className="App">
    <Header/>
    <img src={shape1} className="shape1"/>
     <img src={shape2} className="shape2"/>
      <img src={shape5} className="shape5"/>
     <Homepage/>
     <Footer/>
      </div>
  );
}

export default App;
