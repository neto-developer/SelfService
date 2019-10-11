import styled from 'styled-components';

export const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Content = styled.div`
  width:100%;

  max-width:315px;
  text-align:center;

  img {
    margin-top:70%;
    height: 60px;
    animation-name:logo;
    animation-duration:5s;

    @keyframes logo {
      from {
        opacity:0;
        transform:scale(2);
      }
      to{
        opacity:1;
      }
    }
  }
  form {

    display:flex;
    flex-direction:column;
    margin-top:30px;
    animation-name:login;
    animation-duration:1s;
    @keyframes login {
      from {
        opacity:0;
        transform:scale(0.9);
      }
      to{
        opacity:1;
      }
    }

    input {
      background: rgba(0,0,0,0.1);
      border:0;
      border-radius:4px;
      height:44px;
      padding: 0 15px;
      color:#fff;
      margin: 0 0 10px;

      &::placeholder {
        color:rgba(255,255,255,0.7);

      }
    }

    span {
      align-self:flex-start;
      margin: 0 0 10px;
      font-weight:bold;
      transition:color 5s;
    }

    button {
      margin: 5px 0 0 ;
      height: 44px;
      background:#85b2ff;
      font-weight:bold;
      color:#000;
      border:0;
      border-radius:4px;
      font-size:16px;
      &:hover {
        color:#fff;
        background:black;
        font-weight: 700px !important;
        letter-spacing: 3px;
        box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.3s ease 0s;
      }
    }
    a {
      color:#000;
      margin-top:15px;
      font-size:16px;
      font-weight:bold;
      opacity:0.8;
      border-radius:4px;
      :hover {
        font-weight: 700 !important;
        letter-spacing: 3px;
        box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.3s ease 0s;
      }
    }

  }
`;
