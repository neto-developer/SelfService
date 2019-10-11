import React from 'react';

import Can from '~/components/Can';

import { Container } from './styles';

export default function Rede() {
  return (
    <Can checkPermission={"SuporteCloud"}>
      <Container>
        <div />
      </Container>
    </Can>
  );
}
