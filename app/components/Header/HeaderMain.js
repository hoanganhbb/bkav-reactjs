import styled from 'styled-components';

const HeaderMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 18px;
  color: #919c93;

  .icon {
    vertical-align: middle;
    font-size: 24px;
  }
  .icon-label {
    margin-left: 15px;
  }

  .header-top-label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .header-phone {
      display: flex;
      align-items: center;
    }

    .header-menu {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-left: auto;

      .header-menu-item {
        display: flex;
        margin-left: 30px;
        align-items: center;
      }
    }

    .header-lang {
      display: flex;
      align-items: center;
      margin-left: 30px;
    }
  }

  .header_bottom {
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

    .logo-header {
      width: 210px;
      height: 46px;
      margin-right: 40px;
    }

    .header-cart {
      display: flex;
      align-items: center;
      border: 1px solid #919c93;
      height: 46px;
      border-radius: 10px;
      padding: 0 20px;

      .header-cart-label {
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      .header_cart_label_text {
        display: flex;
        align-items: center;
        margin-left: 15px;
        color: #364a15;
      }
    }
  }
`;
export default HeaderMain;
