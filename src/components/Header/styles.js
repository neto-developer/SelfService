import styled from 'styled-components';

export const Container = styled.div`
  background:#FFF;
  padding:0 30px;

  img {
   width:160px;
   transition: all 0.3s ease 0s;
      :hover {
        font-weight: 700 !important;
        letter-spacing: 3px;
        background: none;
        transition: all 0.3s ease 0s;
      }
  }

`;

export const Content = styled.div`
  height:64px;
  margin: 0 auto ;
  display:flex;
  justify-content:space-between;
  align-items:center;

  nav {

    display:flex;
    align-items:center;

    img {

      margin-right:20px;
      padding-right:20px;
      border-right:1px solid #eee;

    }

    a {
      font-weight:bold;
      color:#4682B4;
      transition: all 0.3s ease 0s;
      :hover {
        font-weight: 700 !important;
        letter-spacing: 3px;
        background: none;
        transition: all 0.3s ease 0s;
      }
    }


  }

  aside {
    display:flex;
    align-items:center;
  }

`;


export const Profile = styled.div`
  display:flex;
  margin-left:20px;
  padding-left:20px;
  border-left: 1px solid #eee;
  align-items:center;

  div {
    text-align:right;
    margin-right:10px;

    strong {
      display:block;
    }

    a {
      display:block;
      margin-top:2px;
      font-size:12px;
      color:#999;
    }

  }

  img {
    width:45px;
    height:45px;
    border: 2px solid #85b2ff;
    border-radius:50%;
  }

  button {
  display:flex;
  margin-left:15%;
  background:none;
  font-weight:bold;
  color:black;
  border:0;
  font-size:16px;

  }


`;
