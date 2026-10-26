import { useEffect, useRef, useState } from 'react';

// Flips to true (and stays true) the first time the element comes near the viewport.
export const useInViewOnce = <T extends Element>(rootMargin = '0px') => {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, visible] as const;
};
