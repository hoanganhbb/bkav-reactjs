import styled from 'styled-components';

const LayoutFooter = styled.div`
  display: flex;
  justify-content: center;
  color: #919c93;
  font-size: 18px;
  font-family: 'Jost', serif;
  background: #f2f2ee;
  width: 1220px;
  padding: 120px 60px;

  .ImgStyle {
    width: 339.98px;
    height: 74.47;
  }

  .LayoutLeft {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 379.98px;
    height: 500px;
  }

  .LayoutMid {
    width: 379.98px;
    height: 500px;
  }

  .LayoutRight {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 339.98px;
    height: 500px;
  }

  .ColorFontTitle {
    color: #364a15;
    text-decoration: none;
  }

  .colorfontlink {
    color: #876a1d;
    text-decoration: none;
  }

  .colorfontlink: hover {
    color: #364a15;
  }

  .layout-infor {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 200px;
  }
  .font-size-large {
    font-size: 24px;
  }

  .contact-email {
    color: #364a15;
    background: #e4e4d9;
    flex: 1 1 auto;
    min-width: 0;
    max-width: 300px;
    margin: 0;
    padding: 0 30px;
    border: 0;
    border-top-left-radius: 27px;
    border-bottom-left-radius: 27px;
    font-size: 16px;
    font-weight: 400;
    height: 60px;
    display: block;
  }

  .form-email {
    display: flex;
  }

  .icon-contact {
    background: #babda5;
    width: 170px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 27px;
    border-bottom-right-radius: 27px;
  }

  .icon-contact: hover {
    background: #c5c8b4;
  }

  .algin-cursor {
    color: white;
  }

  .social-style {
    display: flex;
    justify-content: flex-start;
  }

  .space-social-style {
    margin-right: 20px;
    background: #babda5;
    color: white;
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .space-social-style: hover {
    background: #c5c8b4;
  }

  .colorfont {
    margin-right: 20px;
    color: #876a1d;
  }
  .colorfont: hover {
    color: #364a15;
  }

  .style-2part {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 330px;
  }
`;

export default LayoutFooter;
