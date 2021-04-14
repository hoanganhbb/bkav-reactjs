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
      border: 1px solid #e4e4d9;
      height: 46px;
      border-radius: 10px;
      padding: 0 20px;
      display: ;flex;
      
      .header-cart-label {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      .header_cart_label_text {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 15px;
        color: #364a15;
      }
    }
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-cart {
    display: none;
    position: absolute;
    min-width: 360px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    margin-top : 20px
  }

  .dropdown:hover .dropdown-cart {
    display: block;
    right: 1px;
    border-top-right-radius: 10%;
    border-bottom-left-radius: 10%;
    border-bottom-right-radius: 10%;
  }

  .style-cart {
    padding: 20px 25px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .color-green {
    color: #618626;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 400;
  }

  .style-button-cart {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .btn-cart {
    color: #919c93;
    border: 1px solid #e4e4d9;
    padding-top: 5px;
    padding-right: 30px;
    padding-bottom: 5px;
    padding-left: 30px;
    font-size: 13px;
    border-radius: 5px;
  }
  .btn-cart : hover {
    background: white;
  }
  .style-hr{
    border: 1px solid black;
  }

`;
export default HeaderMain;
