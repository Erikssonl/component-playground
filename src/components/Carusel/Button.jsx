import React from "react";
import styles from "./Carusel.module.css";

const Button = ({ title }) => {
  if (!title) {
    console.error("title i missing on button");
  }
  return (
    <div>
      <button className={styles.button}>{title}</button>
    </div>
  );
};
export default Button;
