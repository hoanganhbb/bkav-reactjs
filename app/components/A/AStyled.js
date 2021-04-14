/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const AStyled = styled.a`
  &.text-link {
    display: block;
    color: #364a15;
    margin: 20px auto;
    border-color: #f2f2ee;
    background-color: #f2f2ee;
    padding: 0.5em 1em;
    border-radius: 1000px;
    cursor: pointer;
    font-size: 14px;
    min-width: max-content;
    font-weight: bold;
  }

  &.icon-link {
  }

  &.title-link {
    color: #364a15;
    cursor: pointer;
  }
`;

export default AStyled;
