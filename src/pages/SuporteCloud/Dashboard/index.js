import React from 'react';
import { Link } from 'react-router-dom';

import Can from '~/components/Can';
import { Container } from './styles';


export default function Dashboard() {

  //const [visible, setVisible] = useState(false);

  //function handleToggleVisible() {
  //  setVisible(!visible);
  //}

  return (
    <Can checkPermission={"SuporteCloud"}>
      <Container>

        <li className="top-menu-list">
          <Link to="/SuporteCloud/Criacao">
            <button className="btn-list">Criação</button>
          </Link>
          <Link to="/SuporteCloud/Backup">
            <button className="btn-list">Backup/Snap</button>
          </Link>
          <Link to="/">
            <button className="btn-list">Rede</button>
          </Link>
          <Link to="/">
            <button className="btn-list">usuarios</button>
          </Link>
          <Link to="/">
            <button className="btn-list">Bloqueio/Desbloqueio</button>
          </Link>
        </li>

        <div>

          <h2>Pagina SuporteCloud</h2>

        </div>
      </Container >
    </Can>
  );
}
