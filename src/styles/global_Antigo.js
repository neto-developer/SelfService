import { createGlobalStyle } from 'styled-components'

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;

  }

  *:focus {
    outline:0;
  }

  html, body, #root {
  height:100%;
  background:linear-gradient(-190deg,#85b2ff,#dbeeff);
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto',sans-serif;
  }

  a {
    text-decoration:none;
  }

  ul {
    list-style:none;
  }

  button {
    cursor: pointer;
  }

  .top-menu-list {
    background:rgba(0,0,0,0.50);;
    list-style:none;
    button {
    border: none;
    background: none;
    color: #ffffff !important;
    font-weight: 100;
    padding: 20px;
    text-transform: uppercase;
    border-radius: 6px;
    display: inline-block;
    transition: all 0.3s ease 0s;
      :hover {
        font-weight: 700 !important;
        letter-spacing: 3px;
        background: none;
        box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.3s ease 0s;
      }
    }

  }


`;

