import React from 'react';
import './App.css';
import MainCard from './MainCard';
import Mainheading from './Mainheading';
import Footer from './Footer'


function App() {
  return(
  <>
    <Mainheading/>
  <div className='mainScreen'>
  <MainCard/>
  </div>
  <Footer/>
  </>
     
  );
}

export default App;
