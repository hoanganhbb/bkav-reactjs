import React from 'react';
import {
  StarFill,
  Cart3,
  Eye,
  Heart,
  TropicalStorm,
} from 'react-bootstrap-icons';

import {
  Wrapper,
  WrapperItem,
  WrapperTag,
  WrapperContent,
} from './WrapperStyled';
import SpanStyled from './SpanStyled';
import Img from '../Img';
import Apple from '../../images/product-apple.jpg';
import Tag from '../Tag';
import A from '../A';

function ItemGrid() {
  const array = [1, 2, 3, 4, 5];
  const rate = 3;
  const price = 14.44;
  const discount = 12.44;

  const onAddCart = () => {};
  return (
    <Wrapper className="grid" href="/detail">
      <WrapperItem className="grid">
        <Img src={Apple} alt="Apple" />
        <WrapperTag className="grid">
          <Tag text="Sale!" textColor="#5dbc75" background="#edf8f0" />
          <Tag text="500Gr" textColor="#fff" background="#6758f3" />
          <Tag text="13.9%" textColor="#fff" background="#e62f29" />
        </WrapperTag>
        <WrapperContent>
          <A text="E-Farm" />
        </WrapperContent>
        <WrapperContent>
          <A title="Organic Apple" />
        </WrapperContent>
        <WrapperContent>
          {array.map(item => (
            <StarFill
              key={item}
              style={{ color: item <= rate ? '#fab300' : '#919c93' }}
            />
          ))}
        </WrapperContent>
        <WrapperContent className="price">
          <SpanStyled className="price">${price}</SpanStyled>
          <SpanStyled className="discount">${discount}</SpanStyled>
        </WrapperContent>
        <WrapperContent className="action">
          <WrapperContent onClick={onAddCart} className="item">
            <Cart3 />
          </WrapperContent>
          <WrapperContent className="item">
            <Eye />
          </WrapperContent>
          <WrapperContent className="item">
            <Heart />
          </WrapperContent>
          <WrapperContent className="item">
            <TropicalStorm />
          </WrapperContent>
        </WrapperContent>
      </WrapperItem>
    </Wrapper>
  );
}

export default ItemGrid;
