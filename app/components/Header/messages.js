/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  pages: {
    id: `${scope}.pages`,
    defaultMessage: 'Pages',
  },
  shop: {
    id: `${scope}.shop`,
    defaultMessage: 'Shop',
  },
  blog: {
    id: `${scope}.Blog`,
    defaultMessage: 'Blog',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
});
