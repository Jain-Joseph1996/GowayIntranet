import * as React from 'react';
import styles from './Communications.module.scss';
import { CountdownUnit } from "./CountdownUnit";

interface CountdownDisplayProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownDisplay: React.FC<CountdownDisplayProps> = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <div className={styles.countdownContainer}>
      <CountdownUnit value={days} label="days" />
      <CountdownUnit value={hours} label="hrs" />
      <CountdownUnit value={minutes} label="min" />
      <CountdownUnit value={seconds} label="sec" />
    </div>
  );
};