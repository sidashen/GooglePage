import React from 'react';
import './icon/iconfont.css';
import './styles/header.css';

function Header(props) {
  return (
    <div className="header">
      <div className="link"><a href="#">{props.gmailLink}</a></div>
      <div className="link"><a href="#">{props.imagesLink}</a></div>
      <i className="iconfont icon-ziyuan"></i>
      <div className="profile-photo"></div>
    </div>
  )
}

export default Header;