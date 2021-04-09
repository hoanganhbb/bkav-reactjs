import React, { useState } from 'react';
import { ArrowUp } from 'react-bootstrap-icons';
import ArrowFooter from './ArrowFooter';

const ArrowStyle = () => {
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
    <ArrowFooter
      style={{ display: showScroll ? 'flex' : 'none' }}
      onClick={scrollTop}
    >
      <div className="arrow-style">
        <ArrowUp size={30} />
      </div>
    </ArrowFooter>
  );
};

export default ArrowStyle;
