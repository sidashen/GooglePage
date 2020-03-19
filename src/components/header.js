import React from 'react';
import '../icon/iconfont.css';
import '../styles/header.css';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <nav className="header">
      <div className="link"><Link to='/header'>Gmail</Link></div>
      <div className="link"><Link to='/header'>Images</Link></div>
      <i className="iconfont icon-ziyuan"></i>
      <Link to='/'><div className="profile-photo"></div></Link>
    </nav>
  );
}

export default Header;