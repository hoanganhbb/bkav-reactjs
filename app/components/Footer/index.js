import React from 'react';
import {
  Facebook,
  Cursor,
  Instagram,
  Twitter,
  Youtube,
} from 'react-bootstrap-icons';
import learnRectjsLogo from 'images/learnRectjsLogo.png';
import Wrapper from './Wrapper';
import LayoutFooter from './LayoutFooter';
import Img from '../Img';

function Footer() {
  return (
    <Wrapper>
      <LayoutFooter>
        <div className="LayoutLeft">
          <div>
            <Img src={learnRectjsLogo} className="ImgStyle" alt="" />
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            nisi ac turpis laoreet auctor sed sed turpis.
          </div>
          <div className="layout-infor">
            <div>
              <div className="ColorFontTitle">Address </div>
              <div>241 Devonshiren Street Lebanon, PA 17042</div>
            </div>
            <div>
              <div className="ColorFontTitle">Phone</div>
              <div>+1-800-123-45-67</div>
            </div>
            <div>
              <div className="ColorFontTitle">Email</div>
              <div>sales@naturally.com</div>
            </div>
          </div>
          <div>
            © 2020
            <a
              className="colorfontlink"
              href="https://ninetheme.com/themes/naturally"
            >
              {' '}
              Naturally{' '}
            </a>{' '}
            All rights reserved by{' '}
            <a
              className="colorfontlink"
              href="https://ninetheme.com/themes/naturally"
            >
              {' '}
              Ninetheme{' '}
            </a>
            .
          </div>
        </div>

        <div className="LayoutMid" />

        <div className="LayoutRight">
          <div className="style-2part">
            <div className="ColorFontTitle font-size-large">Sign Up & Save</div>
            <div>
              Get exclusive offers, free shipping events & more by signing up
              for our promotional emails.
            </div>
            <div className="form-email">
              <input
                className="contact-email"
                size="40"
                type="text"
                placeholder="Enter your e-mail address..."
              />
              <div className="icon-contact">
                <Cursor className="algin-cursor" size={35} />
              </div>
            </div>
            <div className="ColorFontTitle">Follow us</div>
            <div className="social-style">
              <div className="space-social-style">
                <Facebook size={30} />
              </div>
              <div className="space-social-style">
                <Instagram size={30} />
              </div>
              <div className="space-social-style">
                <Twitter size={30} />
              </div>
              <div className="space-social-style">
                <Youtube size={30} />
              </div>
            </div>
          </div>
          <div className="social-style">
            <div className="colorfont">Privacy </div>
            <div className="colorfont">Policy </div>
            <div className="colorfont">Shop</div>
            <div className="colorfont">Blog</div>
          </div>
        </div>
      </LayoutFooter>
    </Wrapper>
  );
}

export default Footer;
