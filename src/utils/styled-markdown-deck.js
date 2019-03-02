import React from 'react';

import { Deck, MarkdownSlides } from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('./overrides.css');

const theme = createTheme(
  {
    primary: '#1F2022',
    secondary: '#CECECE',
    tertiary: '#03A9FC',
    quartenary: 'white',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const deckOptions = {
  theme,
  progress: 'bar',
  transition: ['slide'],
  transitionDuration: 200,
};

export default ({ slides }) => (
  <Deck {...deckOptions}>
    {slides && MarkdownSlides(slides)}
  </Deck>
);
