import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 40px;

  & h4 {
    margin-top: 0;
  }
`;

const WrapperItem = styled.div`
  color: #876a1d;
  padding: 20px;
  border: 1px solid #e4e4d9;
  border-radius: 4px;
`;

const WrapperFilterPrice = styled.div`
  &.padding {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const WrapperAverageRate = styled.div`
  &.padding {
    padding: 0 0 20px 0;
  }
  &.p-rate {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    color: #919c93;
  }

  &.search {
    border: 1px solid #e4e4d9;
    border-radius: 4px;
  }

  & input {
    width: 168px;
    height: 60px;
    padding: 0 20px;
    border: 0;
  }

  & button {
    padding: 16px 18px;
    border: 0;
    background: white;
    color: #919c93;
  }
  & button:hover {
    color: #364a15;
    cursor: pointer;
  }
`;

const WrapperTopRate = styled.div`
  &.item {
    display: grid;
    grid-template-columns: 40% 60%;
  }

  &.content {
    padding: 0 0 0 20px;
  }

  &: fir;
`;
export {
  Wrapper,
  WrapperItem,
  WrapperFilterPrice,
  WrapperAverageRate,
  WrapperTopRate,
};
