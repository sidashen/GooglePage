import React from 'react';
import '../styles/search.css';

function Search() {
  return(
    <div className="search">
        <div className="logo-container"></div>
        <div className="search-area">
          <i className="iconfont icon-search"></i>
          <input type="text" className="input" placeholder="Search Google or type a URL" οnfοcus="clearDefault(this)"></input>
          <i className="iconfont icon-yuyin"></i>
        </div> 
          <div className="history-links">
            <div className="links"><a href="#">Google Search</a></div>
            <div className="links"><a href="#">I'm Feeling Lucky</a></div>
          </div>
          <div className="language-offered">
            <span className="description">Google offered in:</span>
            <a href="#" className="language">中文（繁体）</a>
            <a href="#" className="language">中文（简体）</a>
          </div>
    </div>
  );
}

export default Search;