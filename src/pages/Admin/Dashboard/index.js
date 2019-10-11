import React from 'react';
import { Link } from 'react-router-dom';

import Can from '~/components/Can';
import { Container } from './styles';

export default function Dashboard() {

  return (
    <Can checkPermission={"Admin"}>
      <Container>
        <li className="top-menu-list">

          <Link to="backup">
            <button>Backup/Snap</button>
          </Link>
          <Link to="rede">
            <button>Rede</button>
          </Link>
          <Link to="usuarios">
            <button>usuarios</button>
          </Link>
          <Link to="bloqueio">
            <button>Bloqueio/Desbloqueio</button>
          </Link>

        </li>

        <div>

          <h2>Dash de admin , com muitos acessos</h2>

        </div>
      </Container >
    </Can>
  );
}
