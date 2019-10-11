import { Link } from 'react-router-dom';

import React from 'react';
import { Form, Input, Select, Check } from '@rocketseat/unform';
import * as Yup from 'yup';

import Can from '~/components/Can';

import { Container } from './styles';


const schema = Yup.object().shape({
  codigo: Yup.string().required('O Código é obrigatorio'),
  atendimento: Yup.string().required('O Atendimento é obrigatorio'),
  usuario: Yup.string().required('O Usuário é obrigatorio'),
  usuariobimer: Yup.string().required('O Usuário Bimer é obrigatorio'),
  cloudsonar: Yup.string().required('A Tipo do produto é obrigatorio'),
  produto: Yup.string().required('O Produto é obrigatorio'),
  template: Yup.string().required('O Template é obrigatorio'),
  deployvmware: Yup.string().required('O Customization é obrigatorio'),
});

const cloudsonar = [
  { id: 'cloud', title: 'Cloud' },
  { id: 'sonarserver', title: 'Sonar/Server' }
]


const produto = [
  { id: 'pack', title: 'Pack' },
  { id: 'bimer', title: 'Bimer' },
  { id: 'bimerenterprise', title: 'Bimer-Enterprise' },
  { id: 'ishop', title: 'IShop' },
  { id: 'wshop', title: 'WShop' },
  { id: 'immobile', title: 'Immobile' },
  { id: 'interfacenet', title: 'Interfacenet' },
]


const datacenter = [
  { id: '04', title: '04' },
  { id: '05', title: '05' },
  { id: '06', title: '06' },
  { id: '07', title: '07' },
  { id: '08', title: '08' },
  { id: '09', title: '09' },
  { id: '10', title: '10' },
  { id: '11', title: '11' },
  { id: '14', title: '14' },
  { id: '15', title: '15' },
]

export default function serverCreate() {
  function handleSubmit(data) {
  }

  return (
    <Can checkPermission={"SuporteCloud"}>
      <Container >

        <li className="top-menu-list">
          <Link to="CriarServidorSepado">
            <button>Servidor Separado</button>
          </Link>

        </li>

        <h2>CRIAR SERVIDOR SEPARADO</h2>

        <Form className="form" onSubmit={handleSubmit} schema={schema}>

          <Input name="codigo" className="codigo" placeholder="Insira o Código do cliente" />
          <Input name="atendimento" className="Atendimento" placeholder="Insira o número do Atendimento" />
          <Input name="usuario" className="Atendimento" placeholder="Insira a quantidade de usuários do servidor" />
          <Input name="usuariobimer" className="Atendimento" placeholder="Usuários Bimer * Caso seja Bimer Enterprise" />
          <Select name="cloudsonar" className="nameserver" options={cloudsonar} placeholder="Insira Tipo do Produto Alterdata " />
          <Select name="produto" className="nameserver" options={produto} placeholder="Insira o produto do Cliente" />
          <Select name="datacenter" className="nameserver" options={datacenter} placeholder="Insira o Datacenter" />
          <Check name="prime" className="nameserver" label="PRIME * Caso o cliente seja 'I' ou WSHOP com direito a suporte PRIME" />
          <Check name="sqllicence" className="nameserver" label="Licença SQL * Caso o cliente seja BIMER Enterpprise" />
          <Check name="clientepoc" className="nameserver" label="Cliente POC * Caso o cliente seja Demostração" />


          <button className="confirm" type="submit">Criar Servidor</button>
        </Form>

      </Container>
    </Can>
  );
}

