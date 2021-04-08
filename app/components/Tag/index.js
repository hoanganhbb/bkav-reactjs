import React from 'react';
import PropTypes from 'prop-types';
import TagStyled from './TagStyled';

function Tag({ text, textColor, background }) {
  return (
    <TagStyled textColor={textColor} background={background}>
      {text}
    </TagStyled>
  );
}

Tag.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  background: PropTypes.string,
};

export default Tag;
