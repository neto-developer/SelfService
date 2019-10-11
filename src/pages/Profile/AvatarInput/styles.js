import styled from 'styled-components';

export const Container = styled.div`
  align-self:center;
  margin-bottom:30px;

  label {
    cursor:pointer;

    &:hover {
      opacity:0.7;
    }

    img {
      height:120px;
      width:120px;
      border-radius:50%;
      border: 4px solid #85b2ff;
    }

    input {
      display:none;
    }

  }
`;
