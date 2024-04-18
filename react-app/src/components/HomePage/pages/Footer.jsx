import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h4>About Us</h4>
          <p>We are your local farmer market providing fresh, organic produce and goods.</p>
        </div>
        <div className="footer__section">
          <h4>Contact Us</h4>
          <p>Email: info@localfarmermarket.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="footer__section">
          <h4>Follow Us</h4>
          <p>Stay connected with us on social media for updates!</p>
          <div className="footer__social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 Local Farmer Market. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
