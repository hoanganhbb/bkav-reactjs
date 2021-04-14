import React from 'react';
import PropTypes from 'prop-types';
import { StarFill } from 'react-bootstrap-icons';
import Img from '../Img';
import { WrapperTopRate } from './WrapperStyled';
import Apple from '../../images/product-apple.jpg';
import SpanStyled from '../Item/SpanStyled';

function TopRate({ list }) {
  return (
    <WrapperTopRate>
      <h4>Top Rate Products</h4>
      {list.map(() => (
        <WrapperTopRate className="item">
          <WrapperTopRate className="img">
            <Img src={Apple} alt="Apple" />
          </WrapperTopRate>
          <WrapperTopRate className="content">
            <WrapperTopRate>
              <SpanStyled className="font-14">Organic Apple</SpanStyled>
            </WrapperTopRate>
            <WrapperTopRate style={{ fontSize: '14px' }}>
              {[1, 2, 3, 4, 5].map(item => (
                <StarFill
                  key={item}
                  style={{ color: item <= 4 ? '#fab300' : '#919c93' }}
                />
              ))}
            </WrapperTopRate>
            <WrapperTopRate>
              <SpanStyled className="price font-14">$14.44</SpanStyled>
              <SpanStyled className="discount font-14">$12.44</SpanStyled>
            </WrapperTopRate>
          </WrapperTopRate>
        </WrapperTopRate>
      ))}
    </WrapperTopRate>
  );
}

TopRate.propTypes = {
  list: PropTypes.array,
};

export default TopRate;
