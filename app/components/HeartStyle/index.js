import React, { useState } from 'react';
import { Heart } from 'react-bootstrap-icons';
import HeartFooter from './HeartStyle';

const HeartStyle = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <HeartFooter
      style={{ display: showScroll ? 'flex' : 'none' }}
      onClick={scrollTop}
    >
      <div className="arrow-style">
        <Heart className="border-heart" size={18} />
      </div>
    </HeartFooter>
  );
};

export default HeartStyle;
