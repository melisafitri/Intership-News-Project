import React from "react";
import "./SocialMediaIcon.css";

import TwitterIcon from "../Logo/twitter.svg";
import FacebookIcon from "../Logo/facebook.svg";
import InstagramIcon from "../Logo/instagram.svg";
import YoutubeIcon from "../Logo/youtube.svg";

interface SocialMediaIconProps {
  type: "twitter" | "facebook" | "instagram" | "youtube";
  href?: string;
}

const icons: Record<string, string> = {
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ type, href = "#" }) => {
  return (
    <a href={href} className="social-media-icon" target="_blank" rel="noopener noreferrer">
      <img src={icons[type]} alt={type} width={18} height={18} />
    </a>
  );
};

export default SocialMediaIcon;
