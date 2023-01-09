import { useRef, useState } from "react";

const MILLISECOND = 1000;

export default function useTimer() {
  const [time, setTime] = useState(0);

  const timer = useRef();

  const startTimer = newTime => {
    if (timer.current != null) {
      stopTimer();
    }

    setTime(newTime);
    timer.current = setInterval(() => {
      setTime(s => s - 1);
    }, MILLISECOND);
  };

  const deductTimer = deductTime => setTime(s => s - deductTime);

  const stopTimer = () => {
    clearInterval(timer.current);
    timer.current = null;
  };

  return {
    time,
    startTimer,
    deductTimer,
    stopTimer
  };
}
