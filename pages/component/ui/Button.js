import Link from "next/link";
import React from "react";
import classes from "./button.module.css";

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn} style={{ marginLeft: "00px" }}>
          {props.children}
        </a>
      </Link>
    );
  }
  return (
    <button
      onClick={props.onClick}
      className={classes.btn}
      style={{ marginRight: "10px" }}
    >
      {props.children}
    </button>
  );
};

export default Button;
