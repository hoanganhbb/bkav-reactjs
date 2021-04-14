import React from 'react';
import { StarFill, Search } from 'react-bootstrap-icons';
// import PropTypes from 'prop-types'
import { WrapperAverageRate } from './WrapperStyled';

function AverageRate() {
  return (
    <WrapperAverageRate className="padding">
      <h4>Average rating</h4>
      <WrapperAverageRate className="p-rate">
        <p>
          {[1, 2, 3, 4, 5].map(item => (
            <StarFill
              key={item}
              style={{ color: item <= 4 ? '#fab300' : '#919c93' }}
            />
          ))}
        </p>
        <p>(4)</p>
      </WrapperAverageRate>
      <WrapperAverageRate className="p-rate">
        <p>
          {[1, 2, 3, 4, 5].map(item => (
            <StarFill
              key={item}
              style={{ color: item <= 2 ? '#fab300' : '#919c93' }}
            />
          ))}
        </p>
        <p>(2)</p>
      </WrapperAverageRate>
      <WrapperAverageRate className="search">
        <input placeholder="Search for..." />
        <button type="button">
          <Search key="search" />
        </button>
      </WrapperAverageRate>
    </WrapperAverageRate>
  );
}

AverageRate.propTypes = {};

export default AverageRate;
