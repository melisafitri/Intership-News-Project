import React from "react";
import "./SocialMediaIcon.css";

import TwitterIcon from "../Logo/twitter.svg";
import FacebookIcon from "../Logo/facebook.svg";
import InstagramIcon from "../Logo/instagram.svg";
import YoutubeIcon from "../Logo/youtube.svg";

const icons = {
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

const SocialMediaIcon = ({ type, href = "#" }) => {
  return (
    <a href={href} className="social-media-icon" target="_blank" rel="noopener noreferrer">
      <img src={icons[type]} alt={type} width={18} height={18} />
    </a>
  );
};

export default SocialMediaIcon;
