import React from 'react';
import '../icon/iconfont.css';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  const LinkContents = ['Gmail', 'Images'];
  const ListItems = LinkContents.map((linkContent) => {
    <div className="link">
      <NavLink to='/footer'
        style={{ color: '#7e7b7b' }}
        activeStyle={{ color: 'red' }}>
        {linkContent}
      </NavLink>
    </div>
  });

  return (
    <nav className="header">
      {ListItems}
      <i className="iconfont icon-ziyuan"></i>
      <NavLink to='/'><div className="profile-photo"></div></NavLink>
    </nav>
  );
}

export default Header;