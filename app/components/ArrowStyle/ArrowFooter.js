import styled from 'styled-components';

const ArrowFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  bottom: 100px;
  right: 50px;
  position: fixed;
  z-index: 998;

  .arrow-style {
    width: 60px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background: #babda5;
    border-radius: 15%;
    color: white;
  }
`;

export default ArrowFooter;
