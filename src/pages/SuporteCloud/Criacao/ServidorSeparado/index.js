import { Link } from 'react-router-dom';

import React from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';

import Can from '~/components/Can';

import { Container } from './styles';


const schema = Yup.object().shape({
  codigo: Yup.string().required('O Código é obrigatorio'),
  atendimento: Yup.string().required('O Atendimento é obrigatorio'),
  nomedoservidor: Yup.string().required('O Nome do Servidor é obrigatorio'),
  datacenter: Yup.string().required('O Datacenter é obrigatorio'),
  ou: Yup.string().required('A Ou é obrigatorio'),
  so: Yup.string().required('O Sistema Operacional é obrigatorio'),
  template: Yup.string().required('O Template é obrigatorio'),
  ram: Yup.string().required('A Memoria Ram é obrigatoria'),
  cpu: Yup.string().required('A CPU é obrigatoria'),
  deployvmware: Yup.string().required('O Customization é obrigatorio'),
});

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

const ou = [
  { id: 'pack', title: 'Pack' },
  { id: 'bimer', title: 'Bimer' },
  { id: 'shop', title: 'Shop' },
  { id: 'prime', title: 'Prime' },
  { id: 'immobile', title: 'Immobile' },
  { id: 'interfacenet', title: 'Interfacenet' },
]

const so = [
  { id: 'windows', title: 'Windows' },
  { id: 'linux', title: 'Linux' },
]

const template = [
  { id: 'WIN-TPBIM-AP01', title: 'Bimer AP Windows' },
  { id: 'WIN-TPBIM-DB01', title: 'Bimer DB Windows' },
  { id: 'WIN-TPBIM-DBSTD01', title: 'Bimer DB SQL Standard' },
  { id: 'WIN-TPIMB-AP', title: 'Immobile AP Windows' },
  { id: 'WIN-TPIMB-AP-DB', title: 'Immobile AP+DB Windows' },
  { id: 'WIN-TPIMB-DB', title: 'Immobile DB Windows' },
  { id: 'WIN-TPINTFACE-AP', title: 'InterfaceNET AP Windows' },
  { id: 'WIN-TPINTFACE-DB', title: 'InterfaceNET DB Windows' },
  { id: 'WIN-TPISHOP-AP', title: 'Shop AP Windows' },
  { id: 'WIN-TPISHOP-AP-DB', title: 'Shop AP+DB Windows' },
  { id: 'WIN-TPPACK-AP01', title: 'Pack AP Windows' },
  { id: 'WIN-TPPACK-AP-DB', title: 'Pack AP+DB Windows' },
  { id: 'LNX-TPDB01-POSTGRES-9.6', title: 'Pack/Shop DB Linux' }
]

const ram = [
  { id: '6', title: '6 GB' },
  { id: '8', title: '8 GB' },
  { id: '10', title: '10 GB' },
  { id: '12', title: '12 GB' },
  { id: '16', title: '16 GB' },
  { id: '20', title: '20 GB' },
  { id: '24', title: '24 GB' },
  { id: '32', title: '32 GB' },
  { id: '40', title: '40 GB' },
]

const cpu = [
  { id: '4', title: '4 VCPU' },
  { id: '8', title: '8 VCPU' },
  { id: '12', title: '12 VCPU' },
  { id: '16', title: '16 VCPU' },
]

const deployvmware = [
  { id: 'deploy-postgres', title: 'Deploy Linux Postgres' },
  { id: 'deploy-windows-bimer', title: 'Deploy Windows Bimer' },
  { id: 'deploy-windows-pack', title: 'Deploy Windows Pack' },
  { id: 'deploy-windows-shop', title: 'Deploy Windows Shop' },
]

export default function serverCreate() {
  function handleSubmit(data) {
  }

  return (
    <Can checkPermission={"SuporteCloud"}>
      <Container >

        <li className="top-menu-list">

        </li>

        <h2>CRIAR SERVIDOR SEPARADO</h2>

        <Form className="form" onSubmit={handleSubmit} schema={schema}>

          <Input name="codigo" className="codigo" placeholder="Insira o Código do cliente" />
          <Input name="atendimento" className="Atendimento" placeholder="Insira o número do Atendimento" />
          <Input name="nomedoservidor" className="nameserver" placeholder="Insira Nome do Servidor" />
          <Select name="datacenter" className="nameserver" options={datacenter} placeholder="Insira o Datacenter" />
          <Select name="ou" className="nameserver" options={ou} placeholder="Insira Ou do cliente" />
          <Select name="so" className="nameserver" options={so} placeholder="Insira SO do cliente" />
          <Select name="template" className="nameserver" options={template} placeholder="Insira Template do cliente" />
          <Select name="ram" className="nameserver" options={ram} placeholder="Insira a Memoria Ram do Servidor" />
          <Select name="cpu" className="nameserver" options={cpu} placeholder="Insira a Memoria cpu do Servidor" />
          <Select name="deployvmware" className="nameserver" options={deployvmware} placeholder="Insira Customização do Servidor" />


          <button className="confirm" type="submit">Criar Servidor</button>
        </Form>

      </Container>
    </Can>
  );
}
