// src/globalStyles.ts

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat';
    background-color: #0b0c10;
    color: #c5c6c7;
  }

  h1, h2, h3 {
    color: #66fcf1;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  @media (max-width: 768px) {
    body {
      font-size: 0.9rem;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 0.8rem;
    }

    h1 {
      font-size: 1.6rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    h3 {
      font-size: 1.2rem;
    }
  }
`;
