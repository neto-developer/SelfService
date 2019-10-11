import React from 'react';


import Can from '~/components/Can';
import { Container } from './styles';

export default function Dashboard() {

  return (
    <Can checkPermission={"Limitado"}>
      <Container>
        <li className="top-menu-list">



        </li>

        <div>

          <h2>Você tem acesso limitado,caso precise de um acesso mais elevado, solicite ao L2</h2>

        </div>
      </Container >
    </Can >
  );
}
