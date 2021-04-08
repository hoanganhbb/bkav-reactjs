import React from 'react';
import PropTypes from 'prop-types';

import AStyled from './AStyled';

function A({ text, icon, title }) {
  return text ? (
    <AStyled className="text-link">
      <span>{text}</span>
    </AStyled>
  ) : (
    <AStyled className={icon ? 'icon-link' : 'title-link'}>
      <span>{icon || title}</span>
    </AStyled>
  );
}

A.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
};

export default A;
