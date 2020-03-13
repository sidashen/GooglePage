import React from 'react';
import './styles/App.css';
import Header from './components/header';
import Search from './components/search';
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <Footer/>
    </div>
  );
}

export default App;
