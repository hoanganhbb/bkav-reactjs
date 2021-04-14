import styled from 'styled-components';

const Wrapper = styled.a`
  padding: 0 20px;
  margin-bottom: 40px;
  text-decoration: none;

  &.list {
    display: block;
  }
`;

const WrapperItem = styled.div`
  height: 100%;
  &.grid {
    display: grid;
    padding: 20px;
    border: 1px solid #e4e4d9;
    align-items: center;
    position: relative;
    border-radius: 4px;
    padding: 20px;
    background-color: #fff;
    &:hover {
      border: 1px solid #c4c4ac;
      transition: all 0.1s linear;
    }
  }

  &.list {
    display: grid;
    grid-template-columns: 20% 10% 45% 25%;
    padding: 20px;
    border: 1px solid #e4e4d9;
    align-items: center;
    position: relative;
    border-radius: 4px;
    padding: 20px;
    background-color: #fff;
    &:hover {
      border: 1px solid #c4c4ac;
      transition: all 0.1s linear;
    }
  }
`;

const WrapperTag = styled.div`
  &.grid {
    position: absolute;
    right: -10;
    right: -10px;
    top: 15px;
  }

  &.list {
    display: flex;
    margin-bottom: 10px;
  }
  &.list div {
    margin-right: 3px;
  }
`;

const WrapperContent = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  height: 100%;

  &.price {
    margin-top: 20px;
  }

  &.action {
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 44px;
    margin-top: 20px;
    border: 1px solid #e4e4d9;
    color: #919c93;
    overflow: hidden;
    background-color: #fff;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

  &.item {
    margin: 0;
    height: 100%;
    display: flex;
    width: 25%;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #e4e4d9;

    &:hover {
      background-color: #f2f2ee;
      cursor: pointer;
    }

    &:first-child {
      border-left: none;
    }
  }

  &.list {
    margin: 10px 0 0 0;
    padding-left: 40px;
    height: auto;
  }

  &.list p {
    color: #919c93;
  }
  &.list-span {
    justify-content: flex-end;
    display: flex;
    height: auto;
  }
`;

const WrapperImg = styled.div`
  display: flex;
`;

export { Wrapper, WrapperItem, WrapperTag, WrapperContent, WrapperImg };
