import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api_login from '~/services/api_login';

import Can from '~/components/Can';

import { Container } from './styles';

export default function Backup() {

  const schema = Yup.object().shape({
    Servidor: Yup.string().required('O Servidor é obrigatorio'),
    Rede8: Yup.string()
  });



  async function handleSubmit(data) {

    const response = await api_login.get('', data)


  }

  return (
    <>
      <Can checkPermission={"SuporteCloud"}>
        <Container>
          <li className="top-menu-list">
          </li>
          <h2>EXCLUIR INSTANT RECOVERY</h2>
          <Form className="form" onSubmit={handleSubmit} schema={schema} >
            <Input name="Codigo" placeholder="Codigo" />
            <Input name="Atendimento" placeholder="Atendimento" />
            <Input name="Servidor" placeholder="Servidor" />
            <button className="confirm" type="submit">Excluir</button>
          </Form>
        </Container>
      </Can>
    </>
  );
}
