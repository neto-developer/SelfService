import styled from 'styled-components';

export const Container = styled.div`
  .form {
    Select {
      display: block;
      box-sizing: border-box;
      align-items:left;
      color: #fff;
      background: none;
      margin-top: 10px;
      padding: 8px;
      border: none;
      border-bottom: solid 1px;
      border-bottom-color: rgba(0,0,0,0.2);
      width: 95%;
    }


    Select option {
        background: #4A708B;
        display: flex;
        flex-direction:column;
    }


    span {
      display:flex;
      flex-direction:row;
      text-align: center;
      margin-top: -23px;
      margin-right: 15px;
      color: #363636;
      font-family: 'Roboto', Arial, Helvetica, sans-serif;
      font-size: 14px;
      font-weight:bold;
      padding: 3px;
    }
  }

`;
