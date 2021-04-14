import styled from 'styled-components';

const HeartFooter = styled.div`
  display: flex;
  justify-content: center;
  bottom: 143px;
  right: 50px;
  position: fixed;
  z-index: 998;
  width: 60px;
  height: 55px;

  .arrow-style {
    width: 70%;
    height: 70%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background: #babda5;
    color: white;
    cursor: pointer;
  }

  .arrow-style:hover {
    opacity: 1;
    background: #364a15;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export default HeartFooter;
