import { useEffect, useState } from "react";

export default function Counter() {
  
  const calculateRemainingTime = () => {
    const sec = 1000,
      min = sec * 60,
      hour = min * 60,
      day = hour * 24;

    const end = new Date("Jul 05, 2022 12:00:00").getTime();
    const current = new Date().getTime();
    const remaining = end - current;

    const dd = Math.floor(remaining / day);
    const hh = Math.floor((remaining % day) / hour);
    const mm = Math.floor((remaining % hour) / min);
    const ss = Math.floor((remaining % min) / sec);

    return { dd, hh, mm, ss };
  };

  const [clockData, setClockData] = useState(calculateRemainingTime());

  useEffect(() => {
    let clockInterval = setInterval(() => {
      setClockData(calculateRemainingTime());
    }, 1000);
    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <div className="flex-w flex-c-m cd100 p-b-33">
      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 days">{clockData.dd}</span>
        <span className="s2-txt1">Days</span>
      </div>

      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 hours">{clockData.hh}</span>
        <span className="s2-txt1">Hours</span>
      </div>

      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 minutes">{clockData.mm}</span>
        <span className="s2-txt1">Minutes</span>
      </div>

      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 seconds">{clockData.ss}</span>
        <span className="s2-txt1">Seconds</span>
      </div>
    </div>
  );
}
