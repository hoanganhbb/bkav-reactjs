import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p, label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
    margin: 0;
    color: ##919c93;

  }
  h1 {
    margin: 0;
  }
  .container {
    max-width: 1220px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default GlobalStyle;
