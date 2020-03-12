import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Header from './components/header';
import Search from './components/search';

function App() {
  return (
    <div>
    <Header 
    className="header" 
    gmailLink="Gmail"
    imagesLink="Images">
    </Header>
    <Search
    googleInput="Search Google or type a URL"
    searchLink="Google Search"
    emotionLink="I'm Feeling Lucky"
    offered="Google offered in:"
    mainLanguage="中文（繁体）"
    optionalLanguage="中文（简体）"
    >
    </Search>
    </div>
  )
}

export default App;
