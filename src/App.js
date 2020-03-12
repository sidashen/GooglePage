import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Header from './header';

function App() {
  return (
    <Header 
    className = "header" 
    gmailLink="Gmail"
    imagesLink="Images">
    </Header>
  )
}

export default App;
