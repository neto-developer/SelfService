import React from 'react';


import Can from '~/components/Can';
import { Container } from './styles';

export default function Dashboard() {

  return (
    <Can checkPermission={"Aprendiz"}>
      <Container>
        <li className="top-menu-list">



        </li>

        <div>

          <h2>Pagina Aprendiz</h2>

        </div>
      </Container >
    </Can>
  );
}
