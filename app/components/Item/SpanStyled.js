import styled from 'styled-components';

const SpanStyled = styled.span`
  font-size: 18px;

  &.discount {
    color: #876a1d;
    font-weight: inherit;
  }
  &.price {
    color: #919c93;
    text-decoration: line-through;
    margin-right: 20px;
  }
  &.font-14 {
    font-size: 14px;
  }
`;

export default SpanStyled;
