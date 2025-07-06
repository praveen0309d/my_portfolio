// src/components/AnimatedCounter.jsx

import { useEffect, useState } from "react";

function AnimatedCounter({ target, duration = 1000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = parseInt(target);
    let start = 0;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progressRatio, 3); // ease-out cubic

      const currentCount = Math.floor(easedProgress * end);
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end); // ensure exact final value
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return <h2>{count}</h2>;
}

export default AnimatedCounter;
