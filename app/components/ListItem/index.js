import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';
import Wrapper from './Wrapper';

function ListItem({ theme }) {
  return (
    <Wrapper className={theme === 'grid' ? 'grid' : 'block'}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
        <Fragment key={item}>
          <Item theme={theme} />
        </Fragment>
      ))}
    </Wrapper>
  );
}

ListItem.propTypes = { theme: PropTypes.string };

export default ListItem;
