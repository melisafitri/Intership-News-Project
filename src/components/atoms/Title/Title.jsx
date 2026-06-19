import "./Title.css";

function Title({ text, className = "" }) {
  return <h2 className={`title ${className}`}>{text}</h2>;
}

export default Title;