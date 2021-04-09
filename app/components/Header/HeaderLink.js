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
    background-color: #fff;
    padding: 10px;
    border: none;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    // background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    // color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-content a:hover {background-color: #fff;}
  
  .dropdown:hover .dropdown-content {display: block;}
  
  .dropdown:hover .dropbtn {background-color: #fff;
    border-top: 1px solid  #919c93;
    border-left: 1px solid  #919c93;
    border-right: 1px solid  #919c93;
    border-bottom: none;
    border-radius:  10px 10px 0 0;}
`;
