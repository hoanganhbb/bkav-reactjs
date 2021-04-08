/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import ArrowStyle from 'components/ArrowStyle';
import Footer from 'components/Footer';
import Button from '../../components/Button';
import GlobalStyle from '../../global-styles';
import ListItem from '../../components/ListItem';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  const [theme, setTheme] = useState('grid');

  const onChangeTheme = () => {
    if (theme === 'grid') {
      setTheme('list');
    } else {
      setTheme('grid');
    }
  };

  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Products - Naturally"
        defaultTitle="Products - Naturally"
      >
        <meta name="description" content="Products - Naturally" />
      </Helmet>
      <Header />
      <Button onClick={onChangeTheme}>Theme</Button>
      <ListItem theme={theme} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/pages" component={HomePage} />
        <Route path="/shop" component={HomePage} />
        <Route path="/blog" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <ArrowStyle />
      <GlobalStyle />
    </AppWrapper>
  );
}
