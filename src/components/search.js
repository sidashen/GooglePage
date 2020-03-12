import React from 'react';
import '../styles/search.css';

function Search(props) {
  return(
    <div className="search">
        <div className="logo-container"></div>
        <div className="search-area">
          <i className="iconfont icon-search"></i>
          <input type="text" className="input" placeholder={props.googleInput} οnfοcus="clearDefault(this)"></input>
          <i className="iconfont icon-yuyin"></i>
        </div> 
          <div className="history-links">
            <div className="links"><a href="#">{props.searchLink}</a></div>
            <div className="links"><a href="#">{props.emotionLink}</a></div>
          </div>
          <div className="language-offered">
            <span className="description">{props.offered}</span>
            <a href="#" className="language">{props.mainLanguage}</a>
            <a href="#" className="language">{props.optionalLanguage}</a>
          </div>
    </div>
  )
}

export default Search;