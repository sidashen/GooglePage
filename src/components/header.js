import React from 'react';
import '../icon/iconfont.css';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <nav className="header">
      <div className="link">
        <NavLink to='/header' style={{ color: '#7e7b7b' }} activeStyle={{ color: 'red' }}>
          Gmail
          </NavLink>
      </div>
      <div className="link">
        <NavLink to='/header' style={{ color: '#7e7b7b' }} activeStyle={{ color: 'red' }}>
          Images
          </NavLink>
      </div>
      <i className="iconfont icon-ziyuan"></i>
      <NavLink to='/'><div className="profile-photo"></div></NavLink>
    </nav>
  );
}

export default Header;