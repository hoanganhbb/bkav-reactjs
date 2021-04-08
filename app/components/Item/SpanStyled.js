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
`;

export default SpanStyled;
