import React from 'react';
import './styles/App.css';
import Header from './components/header';
import Search from './components/search';
import Footer from './components/footer'

function App() {
  return (
    <div>
    <Header></Header>
    <Search
      googleInput="Search Google or type a URL"
      searchLink="Google Search"
      emotionLink="I'm Feeling Lucky"
      offered="Google offered in:"
      mainLanguage="中文（繁体）"
      optionalLanguage="中文（简体）">
    </Search>
    <Footer address="Hong Kong">
    </Footer>
    </div>
  )
}

export default App;
