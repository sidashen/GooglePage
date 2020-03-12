import React from 'react';
import '../styles/footer.css';

function Footer(props) {
  return(
    <footer className="footer">
    <div className="address">
      {props.address}
    </div>
    <div className="footer-details footer-display">
      <ul className="footer-function footer-display">
        <li>Advertising</li>
        <li>Business</li>
        <li>About</li>
        <li>How Search works</li>
      </ul>
      <ul className="footer-info footer-display">
        <li>Privacy</li>
        <li>Terms</li>
        <li>Settings</li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer;