'use client'

import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  formattedValue?: string;
  start?: number;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2.5,
  decimals = 0,
  prefix = '',
  suffix = '',
  formattedValue,
  start = 0
}) => {
  const [count, setCount] = useState(start);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    startTimeRef.current = null;
    
    const animate = (timestamp: number) => {
      if (!mounted.current) return;
      
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function for smoother animation
      const easedProgress = easeOutExpo(progress);
      const currentCount = start + (end - start) * easedProgress;
      
      setCount(currentCount);
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
    
    return () => {
      mounted.current = false;
      cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration, start]);
  
  // Easing function for smoother animation
  const easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  };
  
  const formatNumber = (num: number): string => {
    // Si estamos en la animación final (cuando num === end) y hay un formattedValue, usarlo
    if (formattedValue && Math.abs(num - end) < 0.1) {
      return formattedValue;
    }
    
    // Durante la animación, formatear el número normalmente
    const fixed = num.toFixed(decimals);
    const parts = fixed.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return prefix + parts.join('.') + suffix;
  };
  
  return <>{formatNumber(count)}</>;
};

export default CountUp;
