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
          <SocialMediaIcon type="twitter" href="https://x.com/rctiplus" />
          <SocialMediaIcon type="facebook" href="https://www.facebook.com/RCTIPlusOfficial/" />
          <SocialMediaIcon type="instagram" href="https://www.instagram.com/rctiplusofficial/" />
          <SocialMediaIcon type="youtube" href="https://www.youtube.com/channel/UCDR9KL8jZnz0qcqVoU6lIMA" />
        </div>
        <div className="footer__links">
          <a href="https://www.rctiplus.com/privacy-policy" className="footer__link">PRIVACY POLICY</a>
          <a href="https://www.rctiplus.com/terms-&-conditions" className="footer__link">TERMS & CONDITIONS</a>
          <a href="https://www.rctiplus.com/login" className="footer__link">CONTACT US</a>
        </div>
      </div>
      <div className="footer__right">
        <a href="https://apps.apple.com/id/app/rcti-superapp/id1472168599" className="footer__badge" target="_blank" rel="noopener noreferrer">
          <img src={appStore} alt="Download on the App Store" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.fta.rctitv" className="footer__badge" target="_blank" rel="noopener noreferrer">
          <img src={playStore} alt="Get it on Google Play" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
