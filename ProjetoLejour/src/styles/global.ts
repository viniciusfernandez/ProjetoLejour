import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    color: #585858;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Lato', sans-serif;
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Merriweather', serif;
    font-size: 32px;
  }

  button {
    cursor: pointer;
  }
`;
