import { useState, useEffect } from 'react';
const UTC7_OFFSET_MS = 7 * 60 * 60 * 1000;
const getNowInUTC7 = () => {
    const now = new Date();
    // Get UTC time by adding the local timezone offset back to the local time
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    // Return UTC + 7 hours
    return new Date(utc + UTC7_OFFSET_MS).getTime();
  };

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - getNowInUTC7()
  );
  

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = countDownDate - getNowInUTC7();
      
      if (remaining <= 0) {
        clearInterval(interval);
        setCountDown(0);
      } else {
        setCountDown(remaining);
      }
    }, 1000);

    // Cleanup: stops the interval if the user leaves the page
    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // Calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };