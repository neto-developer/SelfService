import styled from 'styled-components';
export const NotificationList = styled.div`
  display:${props => (props.visible ? 'block' : 'none')}

`;
