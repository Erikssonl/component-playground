import React from "react";
import styles from "./Carusel.module.css";

const CaruselCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div className={styles.cardImg}>Img på projekt</div>
        <div className={styles.cardInfo}>Info om projekt</div>
      </div>
    </div>
  );
};
export default CaruselCard;
