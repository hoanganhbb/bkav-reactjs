import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
padding-top: 11px
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  cursor: pointer;
  outline: 0;
  padding: 10px 20px;
  border: 1px solid transparent;
  font-size: 20px;
  font-family: Jost, serif
  color: #919c93;

  &:active {
    color: #fff;
  }
`;
