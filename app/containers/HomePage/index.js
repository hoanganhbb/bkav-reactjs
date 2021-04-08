/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import CenteredSection from './CenteredSection';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Product1 from './images/product1.jpg';
import Product2 from './images/product2.jpg';
import Product3 from './images/product3.jpg';
import Product4 from './images/product4.jpg';
import Product5 from './images/product5.jpg';

const key = 'home';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export function HomePage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <Section>
          <CenteredSection>
            <div className="container">
              <div className="headline">
                <h1 className="headline-title">Shop</h1>
                <p className="headline-summary">
                  <FormattedMessage {...messages.startProjectMessage} />
                </p>
              </div>
            </div>
          </CenteredSection>
        </Section>
        <Section>
          <CenteredSection>
            <div className="container">
              <div className="carousel">
                <Carousel
                  additionalTransfrom={0}
                  arrows
                  // autoPlay
                  autoPlaySpeed={2000}
                  centerMode={false}
                  className=""
                  containerClass="container-with-dots"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                  showDots={false}
                  sliderClass=""
                  slidesToSlide={4}
                  swipeable
                  responsive={responsive}
                >
                  <div className="product">
                    <img
                      src={Product1}
                      alt="react-boilerplate - Logo"
                      className="product-thumbnail"
                    />
                    <p className="product-lable">Csherry</p>
                    <p className="product-lable">10 Products</p>
                  </div>
                  <div className="product">
                    <img
                      src={Product2}
                      alt="react-boilerplate - Logo"
                      className="product-thumbnail"
                    />
                    <p className="product-lable">Carot</p>
                    <p className="product-lable">5 Products</p>
                  </div>
                  <div className="product">
                    <img
                      src={Product3}
                      alt="react-boilerplate - Logo"
                      className="product-thumbnail"
                    />
                    <p className="product-lable">Banana</p>
                    <p className="product-lable">6 Products</p>
                  </div>
                  <div className="product">
                    <img
                      src={Product4}
                      alt="react-boilerplate - Logo"
                      className="product-thumbnail"
                    />
                    <p className="product-lable">Apple</p>
                    <p className="product-lable">8 Products</p>
                  </div>
                  <div className="product">
                    <img
                      src={Product5}
                      alt="react-boilerplate - Logo"
                      className="product-thumbnail"
                    />
                    <p className="product-lable">Nho</p>
                    <p className="product-lable">8 Products</p>
                  </div>
                </Carousel>
              </div>
            </div>
          </CenteredSection>
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
