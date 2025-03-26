import * as React from 'react';
import styles from '../Communications.module.scss';

interface CountdownUnitProps {
    value: number;
    label: string;
  }
  
  export const CountdownUnit: React.FC<CountdownUnitProps> = ({
    value,
    label,
  }) => {
    return (
      <div className={styles.timeUnit}>
        <span className={styles.timeValue}>{value}</span>
        <span className={styles.timeLabel}>{label}</span>
      </div>
    );
  };
  