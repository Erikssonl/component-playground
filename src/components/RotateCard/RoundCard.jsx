import React from "react";
import styles from "./RotateCard.module.css";

const RoundCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardSideFront}>{/* <div>Front Side</div> */}</div>
      <div className={styles.cardSideBack}>
        <a href="">Link to side</a>
      </div>
    </div>
  );
};
export default RoundCard;
