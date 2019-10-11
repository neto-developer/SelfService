import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Select, Check } from '@rocketseat/unform';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

import Can from '~/components/Can';

import { Container } from './styles';

export default function InstantRecovery() {

  const schema = Yup.object().shape({
    Codigo: Yup.string().required('O Codigo é obrigatorio'),
    Rede8: Yup.string(),
    Atendimento: Yup.string().required('O Atendimento é obrigatorio'),
    Servidor: Yup.string().required('O Servidor é obrigatorio'),
    NewServidor: Yup.string().required('O Novo Servidor é obrigatorio'),
    Datacenter2: Yup.string().required('A Rede é obrigatoria'),
    Datacenter: Yup.string().required('A Rede é obrigatoria'),
    Point: Yup.string().required('O Ponto é obrigatorio'),
  });

  const Datacenter = [
    { id: '16', title: '16' },
    { id: '15', title: '15' },
    { id: '14', title: '14' },
    { id: '13', title: '13' },
    { id: '12', title: '12' },
    { id: '11', title: '11' },
    { id: '10', title: '10' },
    { id: '9', title: '9' },
    { id: '8', title: '8' },
    { id: '7', title: '7' },
    { id: '6', title: '6' },
    { id: '5', title: '5' },
    { id: '4', title: '4' },
    { id: '3', title: '3' },
    { id: '2', title: '2' },
    { id: '1', title: '1' },
  ];

  const Point = [
    { id: '9', title: '9' },
    { id: '8', title: '8' },
    { id: '7', title: '7' },
    { id: '6', title: '6' },
    { id: '5', title: '5' },
    { id: '4', title: '4' },
    { id: '3', title: '3' },
    { id: '2', title: '2' },
    { id: '1', title: '1' },
  ];

  async function handleSubmit(data) {




    Swal.fire({
      text: 'Você receberá uma notificação quando restore for finalizado !!',
      background: '#FFFF',
      showConfirmButton: false,
    })

  }

  return (
    <>
      <Can checkPermission={"SuporteCloud"}>
        <Container>
          <li className="top-menu-list">
            <Link to="Backup">
              <button>BACKUP/SNAP</button>
            </Link>
            <Link to="Excluir_Instant_Recovery">
              <button>EXCLUIR INSTANT RECOVERY</button>
            </Link>
            <Link to="SnapShot">
              <button>SNAPSHOT</button>
            </Link>
            <Link to="Remover_SnapShot">
              <button>REMOVER SNAPSHOT</button>
            </Link>
          </li>
          <h2>RESTORE INSTANT RECOVERY</h2>

          <Form className="form" onSubmit={handleSubmit} schema={schema} >
            <Input name="Codigo" className="input-class" placeholder="Codigo" />

            <Check name="Rede8" className="checkbox" label="Marque essa opção caso o cliente seja Rede08 ou superior" />

            <Input name="Atendimento" className="input-class" placeholder="Atendimento" />
            <Input name="Servidor" className="input-class" placeholder="Servidor" />
            <Input name="NewServidor" className="input-class" placeholder="Nome do novo servidor" />

            <Select placeholder="Em qual rede esta o servidor" className="select-class" name="Datacenter2" options={Datacenter} />
            <Select placeholder="Em qual rede deseja subir o backup" className="select-class" name="Datacenter" options={Datacenter} />
            <Select placeholder="Ponto de restauração" className="select-class" name="Point" options={Point} />

            <button className="confirm" type="submit">Restaurar</button>

          </Form>
        </Container>
      </Can>
    </>
  );
}
