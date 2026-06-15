import React from "react";
import SocialMediaIcon from "../../atoms/SocialMediaIcon/SocialMediaIcon";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__socials">
          <SocialMediaIcon type="twitter" />
          <SocialMediaIcon type="facebook" />
          <SocialMediaIcon type="instagram" />
          <SocialMediaIcon type="youtube" />
        </div>
        <div className="footer__links">
          <a href="#" className="footer__link">PRIVACY POLICY</a>
          <a href="#" className="footer__link">TERMS & CONDITIONS</a>
          <a href="#" className="footer__link">CONTACT US</a>
        </div>
      </div>
      <div className="footer__right">
        <a href="#" className="footer__badge">
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
        </a>
        <a href="#" className="footer__badge">
          <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
