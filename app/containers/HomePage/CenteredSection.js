import styled from 'styled-components';
import Section from './Section';

const CenteredSection = styled(Section)`
  text-align: center;
  margin-top: 120px;
  margin-bottom: 120px;
  max-width: 1220px;
  margin-left: auto;
  margin-right: auto;

  .headline {
    .headline-title {
      font-weight: 700;
      font-size: 60px;
      color: #364a15;
      font-family: Merriwether, serif;
    }
    .headline-summary {
      font-size: 24px;
      color: #919c93;
      font-family: Jost, serif;
      padding: 0;
    }
  }

  .carousel {
    .product {
      background: white;
      border: 1px solid #919c93;
      border-radius: 10px;
      margin: 0 15px;
      padding: 20px 50px;
    }

    .product-lable {
      margin-top: 10px;
      font-size: 24px;
      color: #919c93;
      font-family: Jost, serif;
      padding: 0;
    }

    .product-thumbnail {
      width: 100%;
      aspect-ratio: 1/1;
    }
  }
`;

export default CenteredSection;
