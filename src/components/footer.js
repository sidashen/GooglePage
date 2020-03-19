import React from 'react';
import '../styles/footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  const leftLinkContents = ['Advertising', 'Business', 'About', 'How Search works'];
  const leftListItems = leftLinkContents.map((linkContent) => {
    <NavLink to='/footer'
      style={{ color: '#7e7b7b' }}
      activeStyle={{ color: 'red' }}>
      {linkContent}
    </NavLink>
  });

  const rightLinkContents = ['Privacy', 'Terms', 'Settings'];
  const rightListItems = rightLinkContents.map((linkContent) => {
    <NavLink to='/footer'
      style={{ color: '#7e7b7b' }}
      activeStyle={{ color: 'red' }}>
      {linkContent}
    </NavLink>
  });

  return (
    <footer className="footer">
      <div className="address">Hong Kong</div>
      <div className="footer-details footer-display">
        <ul className="footer-function footer-display">
          {leftListItems}
        </ul>
        <ul className="footer-info footer-display">
          {rightListItems}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;