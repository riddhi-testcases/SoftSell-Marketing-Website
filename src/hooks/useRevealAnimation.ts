import { useEffect } from 'react';

const useRevealAnimation = (selector = '.reveal') => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    document.querySelectorAll(selector).forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(selector).forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [selector]);
};

export default useRevealAnimation;