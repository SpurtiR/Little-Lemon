import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main'
import Menu from './components/Menu'
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Main />
        <Menu />
        <Footer />
      </BrowserRouter>
     
    
    </>
  );
}

export default App;
