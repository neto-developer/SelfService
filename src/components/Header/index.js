import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { Link } from 'react-router-dom';

import { signOut } from '../../store/modules/auth/actions'
import Notifications from '../../components/Notifications'

import logo from '../../assets/logo.svg';

import { Container, Content, Profile } from './styles';


export default function Header() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Alterdata"/>
          <Link to="/">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <Link to="/profile">
              <img src={profile.avatar ? profile.avatar.url : logo} alt="avatar" />
            </Link>
            <div>
              <button type="button" onClick={handleSignOut} >SignOut</button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
