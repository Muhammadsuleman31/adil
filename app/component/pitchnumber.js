"use client"
import { useEffect, useState } from 'react';
import styles from './pitchnumber.module.css';

function StatsSection() {
  const [numbers, setNumbers] = useState({
    fundingSuccess: 0,
    investorTime: 0,
    fundedDecks: 0,
    createdDecks: 0,
  });

  useEffect(() => {
    const fundingInterval = setInterval(() => {
      setNumbers((prev) => {
        if (prev.fundingSuccess < 1) return { ...prev, fundingSuccess: prev.fundingSuccess + 0.01 };
        return prev;
      });
    }, 30);

    const timeInterval = setInterval(() => {
      setNumbers((prev) => {
        if (prev.investorTime < 3) return { ...prev, investorTime: prev.investorTime + 0.05 };
        return prev;
      });
    }, 30);

    const fundedInterval = setInterval(() => {
      setNumbers((prev) => {
        if (prev.fundedDecks < 10) return { ...prev, fundedDecks: prev.fundedDecks + 0.1 };
        return prev;
      });
    }, 30);

    const createdInterval = setInterval(() => {
      setNumbers((prev) => {
        if (prev.createdDecks < 1000) return { ...prev, createdDecks: prev.createdDecks + 10 };
        return prev;
      });
    }, 30);

    return () => {
      clearInterval(fundingInterval);
      clearInterval(timeInterval);
      clearInterval(fundedInterval);
      clearInterval(createdInterval);
    };
  }, []);

  return (
    <div className={styles.statsContainer}>
      <div className={styles.statItem}>
        <h1>{numbers.fundingSuccess.toFixed(0)}/400</h1>
        <p>Success For Angel Funding</p>
      </div>
      <div className={styles.statItem}>
        <h1>&lt;{numbers.investorTime.toFixed(0)}mins</h1>
        <p>Average Investor Time To Review Deck</p>
      </div>
      <div className={styles.statItem}>
        <h1>&lt;{numbers.fundedDecks.toFixed(1)}%</h1>
        <p>Pitch Decks Get Funded</p>
      </div>
      <div className={styles.statItem}>
        <h1>{numbers.createdDecks.toFixed(0)}+</h1>
        <p>Pitch Decks Created Every Day</p>
      </div>
    </div>
  );
}

export default StatsSection;
