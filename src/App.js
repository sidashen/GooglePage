import React from 'react';
import './styles/App.css';
import HeaderLink from './components/HeaderLink';
import FooterLink from './components/FooterLink';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Search from './components/search';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <switch>
          <Route path="/" exact component={Search}></Route>
          <Route path="/header" component={HeaderLink}></Route>
          <Route path="/footer" component={FooterLink}></Route>
        </switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
