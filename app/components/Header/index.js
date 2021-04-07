import React from 'react';
import { FormattedMessage } from 'react-intl';
import LocaleToggle from 'containers/LocaleToggle';
import { Headset, Search, People, Bag, Globe } from 'react-bootstrap-icons';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import HeaderMain from './HeaderMain';

import Logo from './logo.png';
import messages from './messages';
import A from '../A';

function Header() {
  return (
    <div>
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
          <A href="https://ninetheme.com/themes/naturally/shop/#0">
            <img
              src={Logo}
              alt="react-boilerplate - Logo"
              className="logo-header"
            />
          </A>
          <NavBar>
            <HeaderLink to="/">
              <FormattedMessage {...messages.home} />
            </HeaderLink>
            <HeaderLink to="/pages">
              <FormattedMessage {...messages.pages} />
            </HeaderLink>
            <HeaderLink to="/shop">
              <FormattedMessage {...messages.shop} />
            </HeaderLink>
            <HeaderLink to="/blog">
              <FormattedMessage {...messages.blog} />
            </HeaderLink>
            <HeaderLink to="/features">
              <FormattedMessage {...messages.features} />
            </HeaderLink>
          </NavBar>

          <div className="header-cart">
            <div className="header-cart-label">
              <span className="icon">
                <Bag />
              </span>
              <span className="header_cart_label_text">$ 00.00/ 0 items</span>
            </div>
          </div>
        </div>
      </HeaderMain>
    </div>
  );
}

export default Header;
