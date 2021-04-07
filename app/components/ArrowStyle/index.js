import React from 'react';
import { ArrowUp } from 'react-bootstrap-icons';
import ArrowFooter from './ArrowFooter';

function ArrowStyle() {
  return (
    <ArrowFooter>
      <div className="arrow-style">
        <ArrowUp className="arrow-style-postion" size={30} />
      </div>
    </ArrowFooter>
  );
}

export default ArrowStyle;
