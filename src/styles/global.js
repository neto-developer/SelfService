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
    min-height:100%;
  }

  body {
    background:linear-gradient(-30deg,#ADD8E6,#4682B4) no-repeat;
    background-size: cover;
  -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-family:  'Roboto light', Arial, Helvetica, sans-serif;
    font-size: 14px;
  }


  h1, h2 {
    font-family:  'Roboto light', Arial, Helvetica, sans-serif;
    font-size: 14px;
    text-align: center;
    margin: 3%;
    color: #eee;
  }


  body, input, button {
    font: 14px 'Roboto',sans-serif;
  }


  a {
    text-decoration:none;
  }



  button {
    cursor: pointer;
  }


  .top-menu-list {
    background:rgba(0,0,0,0.2);;
    list-style:none;
    button {
    border: none;
    @media (min-width: 1000px){
      padding: 10px;
    }
    background: none;
    color: #fff !important;
    font-weight: 100;
    padding: 5px;
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

  .form {
    margin:20px 25px 10px 25px;
    background:rgba(0,0,0,0.1);
    height:90%;
    border-radius:4px;
    display:flex;
    flex-direction:column;
    @media (min-width: 1000px){
    align-items:center;
    }

    align-items:flex-end;


    input, select{
      font-family: 'Roboto Light', Arial, Helvetica, sans-serif;
      font-size:13px;

    }

    input {
      display: block;
      box-sizing: border-box;
      align-items:left;
      padding: 8px;
      margin-top: 10px;
      background: none;
      border: none;
      border-bottom: solid 1px;
      border-bottom-color: rgba(0,0,0,0.2);
      width:95%;
      ::placeholder{
        color: #eee;
      }
    }

  }
  button.confirm {
    width: 180px;
    height:50px;
    border: none;
    background: none;
    color: #FFFFE0 !important;
    font-weight: 100;
    padding: 10px;
    margin-left: 70%;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 6px;
    display: inline-block;
    transition: all 0.3s ease 0s;
  }
  button.confirm:hover {
    font-weight: 700 !important;
    letter-spacing: 3px;
    background: none;
    -webkit-box-shadow: 0px 5px 50px -7px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 10px 40px -5px rgba(0, 0, 0, 0.26);
    transition: all 0.3s ease 0s;
  }


`;

