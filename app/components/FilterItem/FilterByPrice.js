import React, { useState } from 'react';
import { RangeSlider } from 'reactrangeslider';
// import PropTypes from 'prop-types';
import { WrapperFilterPrice } from './WrapperStyled';
import SpanStyled from '../Item/SpanStyled';
import { ButtonStyled } from './ButtonStyled';

function FilterByPrice() {
  const [value, setValue] = useState({ start: 20, end: 50 });

  // eslint-disable-next-line no-shadow
  const onChangeValue = value => {
    setValue(value);
  };

  return (
    <WrapperFilterPrice>
      <h4>Filter By Price</h4>
      <RangeSlider
        value={value}
        min={10}
        max={50}
        step={5}
        onChange={onChangeValue}
      />
      <WrapperFilterPrice className="padding">
        <ButtonStyled>Filter</ButtonStyled>
        <SpanStyled>Price:</SpanStyled>
        <SpanStyled>${value.start}</SpanStyled>
        <SpanStyled>-</SpanStyled>
        <SpanStyled>${value.end}</SpanStyled>
      </WrapperFilterPrice>
    </WrapperFilterPrice>
  );
}

FilterByPrice.propTypes = {};

export default FilterByPrice;
