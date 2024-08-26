import React, { useState, useEffect } from "react";

const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the current time every second
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-center">
      <p className="text-lg">{formatTime(currentTime)}</p>
      <p className="text-sm text-gray-600">{formatDate(currentTime)}</p>
    </div>
  );
};

export default RealTimeClock;
