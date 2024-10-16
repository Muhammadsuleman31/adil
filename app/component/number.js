// components/Counter.js
'use client'

import { useEffect, useState } from 'react';

export default function Counter({ targetNumber }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < targetNumber) {
      const timer = setTimeout(() => setCount(count + 1), 10);
      return () => clearTimeout(timer); // Cleanup timeout on component unmount or before the next effect runs
    }
  }, [count, targetNumber]);

  return (
    <div>
      {count}
    </div>
  );
}
