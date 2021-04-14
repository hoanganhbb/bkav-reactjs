import React from 'react';
// import PropTypes from 'prop-types';

import { Wrapper, WrapperImg, WrapperContent } from './Wrapper';
import Img from '../../components/Img';
import Apple from '../../images/product-apple.jpg';
import Tag from '../../components/Tag';

function DetailPage() {
  return (
    <Wrapper>
      <WrapperImg>
        <Img src={Apple} alt="Apple" />
        <WrapperImg>
          <Tag text="Sale!" textColor="#5dbc75" background="#edf8f0" />
          <Tag text="13.9%" textColor="#fff" background="#e62f29" />
        </WrapperImg>
      </WrapperImg>
      <WrapperContent>Content</WrapperContent>
    </Wrapper>
  );
}

DetailPage.propTypes = {};

export default DetailPage;
