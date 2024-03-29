import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.div`
  max-width:600px;
  margin:50px auto;

  animation-name:profile;
  animation-duration:1s;

  @keyframes profile {
    from {
      opacity:0;
      transform:scale(0.9);
    }
    to{
      opacity:1;
    }
  }

  form {
  display:flex;
  flex-direction:column;
  margin-top:30px;


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
    background:#3b9eff;
    font-weight:bold;
    color:#fff;
    border:0;
    border-radius:4px;
    font-size:16px;
    transition:background 5s;

    &:hover {
      background:${darken(0.80, '#3b9eff')}
    }
  }
}

> button {
  width:100%;
  margin: 10px 0 0 ;
  height: 44px;
  background:#f64c75;
  font-weight:bold;
  color:#fff;
  border:0;
  border-radius:4px;
  font-size:16px;
  transition:background 5s;
  &:hover {
    background:${darken(0.80, '#f64c75')}
  }
  }
`;

