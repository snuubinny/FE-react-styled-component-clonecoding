import "./Button2.css";

const Button = (props) => {
  return <button className="btn2"
  style={{backgroundColor:props.color}}
      onClick={props.onClick}
    >{props.label}
  </button>;
};

export default Button;