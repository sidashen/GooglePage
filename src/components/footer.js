import React from 'react';
import '../styles/footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="address">Hong Kong</div>
      <div className="footer-details footer-display">
        <ul className="footer-function footer-display">
          <NavLink to='/footer' style={{ color: '#7e7b7b' }} activeStyle={{ color: 'red' }}>
            <li>Advertising</li>
          </NavLink>
          <NavLink to='/footer' style={{ color: '#7e7b7b' }} activeStyle={{ color: 'red' }}>
            <li>Business</li>
          </NavLink>
          <NavLink to='/footer' style={{ color: '#7e7b7b' }} activeStyle={{ color: 'red' }}>
            <li>About</li>
          </NavLink>
          <NavLink to='/footer' style={{ color: '#7e7b7b' }} activeStyle={{ color: 'red' }}>
            <li>How Search works</li>
          </NavLink>
        </ul>
        <ul className="footer-info footer-display">
          <NavLink to='/footer' style={{ color: '#7e7b7b' }} activeStyle={{ color: 'red' }}>
            <li>Privacy</li>
          </NavLink>
          <NavLink to='/footer' style={{ color: '#7e7b7b' }} activeStyle={{ color: 'red' }}>
            <li>Terms</li>
          </NavLink>
          <NavLink to='/footer' style={{ color: '#7e7b7b' }} activeStyle={{ color: 'red' }}>
            <li>Settings</li>
          </NavLink>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;