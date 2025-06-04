
import { useState, useEffect } from 'react';

export default function useScrollSpy(ids = [], offset = 0) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = ids[0];
      for (let id of ids) {
        const elem = document.getElementById(id);
        if (!elem) continue;
        
        const top = elem.getBoundingClientRect().top - offset;
        if (top <= 0) current = id;
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset]);

  return activeId;
}
