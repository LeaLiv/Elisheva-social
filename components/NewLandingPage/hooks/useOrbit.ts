import { useEffect } from 'react';
import { animate, useMotionValue } from 'framer-motion';
import { ORBIT_SECONDS } from '../../../data/landing';

// Continuously rotating 0 -> 360 degree motion value for the orbit ring.
export const useOrbit = () => {
  const orbit = useMotionValue(0);

  useEffect(() => {
    const controls = animate(orbit, 360, { duration: ORBIT_SECONDS, ease: 'linear', repeat: Infinity });
    return () => controls.stop();
  }, [orbit]);

  return orbit;
};
