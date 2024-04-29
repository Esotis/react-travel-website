import React from "react";
import { Link } from "react-router-dom";
import "../css/Button.css";

const styles = ["btn-primary", "btn-outline"];

const sizes = ["btn-medium", "btn-large"];

export default function Button(props) {
  const checkButtonStyle = styles.includes(props.buttonStyle)
    ? props.buttonStyle
    : styles[0];

  const checkButtonSize = sizes.includes(props.buttonSize)
    ? props.buttonSize
    : sizes[0];

  return (
    <>
      <Link to="/sign-up" className="btn-mobile">
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={props.onClick}
          type={props.type}
        >
          {props.children}
        </button>
      </Link>
    </>
  );
}
