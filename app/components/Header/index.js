import React from 'react';
import { FormattedMessage } from 'react-intl';
import LocaleToggle from 'containers/LocaleToggle';
import { Headset, Search, People, Bag, Globe } from 'react-bootstrap-icons';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import HeaderMain from './HeaderMain';
import Logo from './logo.png';
import messages from './messages';

function Header() {
  return (
    <div>
      <div className="container">
        <HeaderMain>
          <div className="header-top-label">
            <div className="header-phone">
              <span className="icon">
                <Headset />
              </span>
              <span className="icon-label">+1-800-123-45-67</span>
            </div>
            <div className="header-menu">
              <div className="header-menu-item">
                <span className="icon">
                  <Search />
                </span>
                <span className="icon-label">Search</span>
              </div>
              <div className="header-menu-item">
                <span className="icon">
                  <People />
                </span>
                <span className="icon-label">My Account</span>
              </div>
            </div>
            <div className="header-lang">
              <span className="icon">
                <Globe />
              </span>
              <span className="icon-label">
                {' '}
                <LocaleToggle />
              </span>
            </div>
          </div>
          <div className="header_bottom">
            <a href="https://ninetheme.com/themes/naturally/shop/#0">
              <img
                src={Logo}
                alt="react-boilerplate - Logo"
                className="logo-header"
              />
            </a>
            <NavBar>
              <HeaderLink to="/">
                <div className="dropdown">
                  <button type="button" className="dropbtn">
                    <FormattedMessage {...messages.home} />
                  </button>
                  <div className="dropdown-content">
                    <a href>Link 1</a>
                    <a href>Link 2</a>
                    <a href>Link 3</a>
                  </div>
                </div>
              </HeaderLink>
              <HeaderLink to="/pages">
                <div className="dropdown">
                  <button type="button" className="dropbtn">
                    <FormattedMessage {...messages.pages} />
                  </button>
                  <div className="dropdown-content">
                    <a href>Link 1</a>
                    <a href>Link 2</a>
                    <a href>Link 3</a>
                  </div>
                </div>
              </HeaderLink>
              <HeaderLink to="/shop">
                <div className="dropdown">
                  <button type="button" className="dropbtn">
                    <FormattedMessage {...messages.shop} />
                  </button>
                  <div className="dropdown-content">
                    <a href>Link 1</a>
                    <a href>Link 2</a>
                    <a href>Link 3</a>
                  </div>
                </div>
              </HeaderLink>
              <HeaderLink to="/blog">
                <div className="dropdown">
                  <button type="button" className="dropbtn">
                    <FormattedMessage {...messages.blog} />
                  </button>
                  <div className="dropdown-content">
                    <a href>Link 1</a>
                    <a href>Link 2</a>
                    <a href>Link 3</a>
                  </div>
                </div>
              </HeaderLink>
              <HeaderLink to="/features">
                <div className="dropdown">
                  <button type="button" className="dropbtn">
                    <FormattedMessage {...messages.features} />
                  </button>
                  <div className="dropdown-content">
                    <a href>Link 1</a>
                    <a href>Link 2</a>
                    <a href>Link 3</a>
                  </div>
                </div>
              </HeaderLink>
            </NavBar>
            <div className="dropdown header-cart">
              <div className="header-cart-label">
                <span className="icon">
                  <Bag />
                </span>
                <span className="header_cart_label_text">
                  $ 00.00 / 0 items
                </span>
              </div>
              <div className="dropdown-cart">
                <div className="style-cart">
                  <p className="color-green">Your Cart</p>
                  <p>No products in the cart.</p>
                  <div className="style-button-cart">
                    <button className="btn-cart" type="submit">
                      Start Shopping
                    </button>
                    <button className="btn-cart" type="submit">
                      Return Policy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeaderMain>
      </div>
    </div>
  );
}

export default Header;
