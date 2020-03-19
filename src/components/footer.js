import React from 'react';
import '../styles/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="address">Hong Kong</div>
      <div className="footer-details footer-display">
        <ul className="footer-function footer-display">
          <Link to='/footer' style={{ color: '#7e7b7b' }}>
            <li>Advertising</li>
          </Link>
          <Link to='/footer' style={{ color: '#7e7b7b' }}>
            <li>Business</li>
          </Link>
          <Link to='/footer' style={{ color: '#7e7b7b' }}>
            <li>About</li>
          </Link>
          <Link to='/footer' style={{ color: '#7e7b7b' }}>
            <li>How Search works</li>
          </Link>
        </ul>
        <ul className="footer-info footer-display">
          <Link to='/footer' style={{ color: '#7e7b7b' }}>
            <li>Privacy</li>
          </Link>
          <Link to='/footer' style={{ color: '#7e7b7b' }}>
            <li>Terms</li>
          </Link>
          <Link to='/footer' style={{ color: '#7e7b7b' }}>
            <li>Settings</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;