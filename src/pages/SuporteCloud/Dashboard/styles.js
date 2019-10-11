import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar'


export const Container = styled.div`

  position:relative;

`;

export const Badge = styled.button`
  background:none;
  border:0;
  position:relative;

`;

export const MenuList = styled.div`
  animation-name:notification;
  animation-duration:1s;
  @keyframes notification {
    from {
      opacity:0;
      transform:scale(0.8);
    }
    to{
      opacity:1;
    }
  }

  display:${props => (props.visible ? 'block' : 'none')}

`;

export const Scroll = styled(PerfectScrollbar)`
  max-height:260px;
  padding:15px 5px;
`;
