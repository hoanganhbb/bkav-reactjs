import React from 'react';
import PropTypes from 'prop-types';

import ItemGrid from './ItemGrid';
import ItemList from './ItemList';

function Item({ theme }) {
  return theme === 'grid' ? <ItemGrid /> : <ItemList />;
}

Item.propTypes = { theme: PropTypes.string };

export default Item;
