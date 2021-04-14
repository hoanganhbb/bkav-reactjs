import React from 'react';
// import PropTypes from 'prop-types';

import FilterByPrice from './FilterByPrice';
import AverageRate from './AverageRate';
import { Wrapper, WrapperItem } from './WrapperStyled';
import TopRate from './TopRate';

function FilterItem() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <Wrapper>
      <WrapperItem>
        <FilterByPrice />
        <AverageRate />
        <TopRate list={arr} />
      </WrapperItem>
    </Wrapper>
  );
}

FilterItem.propTypes = {};

export default FilterItem;
