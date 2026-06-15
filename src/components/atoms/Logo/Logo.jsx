import "./Logo.css";
import logoRcti from "./Logo-Rcti.png";

function Logo({ alt = "RCTI+" }) {
  return (
    <div className="logo">
      <img src={logoRcti} alt={alt} />
    </div>
  );
}

export default Logo;