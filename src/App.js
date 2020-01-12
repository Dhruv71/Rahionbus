import React from 'react';
import Homepage from './pages/homepage/homepage.component.jsx';
import Header from './components/header/header.component';
import './App.scss';

function App() {
  return (
    <div className="App">
    <Header/>
    <div className='shape1'></div>
    <div className='shape2'></div>
      <Homepage />
    </div>
  );
}

export default App;
