import React from "react";
import SocialMediaIcon from "../../atoms/SocialMediaIcon/SocialMediaIcon";
import appStore from "../../atoms/Logo/appstore.png";
import playStore from "../../atoms/Logo/playstore.png";
import "./Footer.css";

const Footer = () => {
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
          <img src={appStore} alt="Download on the App Store" />
        </a>
        <a href="#" className="footer__badge">
          <img src={playStore} alt="Get it on Google Play" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
