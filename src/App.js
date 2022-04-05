import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import React from 'react';
import Movies from './Components/Movies';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Banner/>
      <hr/>
      <Movies/>
    </React.Fragment>
  );
}

export default App;
