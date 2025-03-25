import * as React from "react";
import styles from "./Communications.module.scss";
import { CelebrationData } from "./celebrationtype";

interface CelebrationCardProps {
  celebration: CelebrationData;
}

export const CelebrationCard: React.FC<CelebrationCardProps> = ({
  celebration,
}) => {
  const { name, isAdmin, imageUrl, celebrationType, date, years } = celebration;

  return (
    <article className={styles.celebrationCard}>
      <div className={styles.avatarContainer}>
        <img
          src={imageUrl}
          alt={`${name}'s profile picture`}
          className={styles.avatarImage}
        />
      </div>
      <div className={styles.celebrationInfo}>
        <h3 className={styles.employeeName}>
          {name}
          {isAdmin && " (Admin)"}
        </h3>
        <p className={styles.celebrationDate}>
          {celebrationType === "birthday" ? "Birthday" : "Work Anniversary"} on{" "}
          {date}
        </p>
        <p className={styles.celebrationYears}>Celebrating {years} year(s)</p>
      </div>
    </article>
  );
};
