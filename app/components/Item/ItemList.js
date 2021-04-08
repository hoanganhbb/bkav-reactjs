import React from 'react';
import {
  Cart3,
  Eye,
  Heart,
  StarFill,
  TropicalStorm,
} from 'react-bootstrap-icons';
import A from '../A';
import Img from '../Img';
import Tag from '../Tag';
import SpanStyled from './SpanStyled';
import {
  Wrapper,
  WrapperContent,
  WrapperItem,
  WrapperTag,
  WrapperImg,
} from './WrapperStyled';
import Apple from '../../images/product-apple.jpg';

function ItemList() {
  const array = [1, 2, 3, 4, 5];
  const rate = 3;
  const price = 14.44;
  const discount = 12.44;
  return (
    <Wrapper>
      <WrapperItem className="list">
        <WrapperImg>
          <Img src={Apple} alt="Apple" />
        </WrapperImg>
        <WrapperContent>
          <A text="E-Farm" />
        </WrapperContent>

        <WrapperContent className="list">
          <A title="Organic Apple" />
          <WrapperContent>
            {array.map(item => (
              <StarFill
                style={{ color: item <= rate ? '#fab300' : '#919c93' }}
              />
            ))}
          </WrapperContent>
          <WrapperContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              et sapien velit. Quisque id sagittis odio. In pulvinar ex vitae
              viverra aliquam.
            </p>
          </WrapperContent>
        </WrapperContent>

        <WrapperContent className="price">
          <WrapperTag className="list">
            <Tag text="Sale!" textColor="#5dbc75" background="#edf8f0" />
            <Tag text="500Gr" textColor="#fff" background="#6758f3" />
            <Tag text="13.9%" textColor="#fff" background="#e62f29" />
          </WrapperTag>
          <WrapperContent className="list-span">
            <SpanStyled className="price">${price}</SpanStyled>
            <SpanStyled className="discount">${discount}</SpanStyled>
          </WrapperContent>
          <WrapperContent className="action">
            <WrapperContent className="item">
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
        </WrapperContent>
      </WrapperItem>
    </Wrapper>
  );
}

ItemList.propTypes = {};

export default ItemList;
