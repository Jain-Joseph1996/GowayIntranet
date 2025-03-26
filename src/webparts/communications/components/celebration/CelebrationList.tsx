import * as React from "react";
import styles from "../Communications.module.scss";
import { CelebrationCard } from "./CelebrationCard";
import { CelebrationData } from "../../models/ICelebrationtypeProps";

const celebrationData: CelebrationData[] = [
  {
    name: "Andrew Calston",
    isAdmin: false,
    imageUrl: "https://placehold.co/48x48/4a90e2/4a90e2",
    celebrationType: "birthday",
    date: "Jun 05",
    years: 2,
  },
  {
    name: "Luis Ponce",
    imageUrl: "https://placehold.co/48x48/f4a261/f4a261",
    celebrationType: "birthday",
    date: "Jun 12",
    years: 2,
  },
  {
    name: "Yaroslav Pentsarskyy",
    imageUrl: "https://placehold.co/48x48/2a9d8f/2a9d8f",
    celebrationType: "work_anniversary",
    date: "Jun 14",
    years: 2,
  },
  {
    name: "Sabina Saetgareeva",
    imageUrl: "https://placehold.co/48x48/e76f51/e76f51",
    celebrationType: "work_anniversary",
    date: "Jun 19",
    years: 5,
  },
  {
    name: "Andrew Calston",
    isAdmin: false,
    imageUrl: "https://placehold.co/48x48/4a90e2/4a90e2",
    celebrationType: "work_anniversary",
    date: "Nov 05",
    years: 1,
  },
  {
    name: "John Doe",
    imageUrl: "https://placehold.co/48x48/e76f51/e76f51",
    celebrationType: "work_anniversary",
    date: "July 19",
    years: 6,
  },
  {
    name: "Tim Cook",
    imageUrl: "https://placehold.co/48x48/e76f51/e76f51",
    celebrationType: "birthday",
    date: "April 19",
    years: 8,
  },
];

export default function CelebrationList() {
  return (
    <section className={styles.Celebcontainer}>
      <div className={styles.listWrapper}>
        <div className={styles.celebrationsList}>
          {celebrationData.map((celebration, index) => (
            <CelebrationCard
              key={`${celebration.name}-${celebration.date}-${index}`}
              celebration={celebration}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
