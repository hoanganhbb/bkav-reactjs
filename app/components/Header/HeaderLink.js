import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  padding-top: 11px
  display: inline-flex;
  margin: 10px;
  text-decoration: none;
  cursor: pointer;
  outline: 0;
  padding: 10px;
  border: 1px solid transparent;
  font-size: 20px;
  font-family: Jost, serif

  &:active {
    color: #fff;
  }
  &:hover {
    color: #618626;
  }

  .dropbtn {
    color: #618626;
    padding: 10px;
    border: none;
    background: none;
    border-radius: 15%;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    min-width: 160px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }


  .dropdown:hover .dropdown-content {
    display: block;
    border-top-right-radius: 10%;
    border-bottom-left-radius : 10%;
    border-bottom-right-radius : 10%;
  }

`;
