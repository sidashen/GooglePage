import React from 'react';
import './styles/App.css';
import Header from './components/header';
import Search from './components/search';
import Footer from './components/footer'
import HeaderLink from './components/HeaderLink';
import FooterLink from './components/FooterLink';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Footer />
      <Router>
        <Route path="/header" component={HeaderLink}></Route>
        <Route path="/footer" component={FooterLink}></Route>
      </Router>
    </div>
  );
}

export default App;
