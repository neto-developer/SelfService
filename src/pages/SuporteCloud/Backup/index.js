import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api_login from '~/services/api_login';
import Swal from 'sweetalert2';

import Can from '~/components/Can';

import { Container } from './styles';

export default function Backup() {

  const schema = Yup.object().shape({
    Servidor: Yup.string().required('O Servidor é obrigatorio'),
    Rede8: Yup.string()
  });



  async function handleSubmit(data) {
    if (document.getElementById("Rede8").checked === true) {
      var Rede8 = true;
    } else {
      Rede8 = false;
    }
    let timerInterval


    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      background: '#adcbff',
      timer: 9999999999999999,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    })
    Toast.fire({
      title: 'Realizando consulta...'
    })
    const response = await api_login.get('ConsultarPonto',
      {
        params: {
          'Servidor': data.Servidor,
          'Rede8': Rede8
        }
      });

    Swal.fire({
      text: `${response.data}`,
      background: '#FFFF',
      color: '000000',
      showConfirmButton: false,
      irmButton: true

    })

  }

  return (
    <>
      <Can checkPermission={"SuporteCloud"}>
        <Container>
          <li className="top-menu-list">
            <Link to="InstantRecovery">
              <button>INSTANT RECOVERY</button>
            </Link>
            <Link to="ExcluirRecovery">
              <button>EXCLUIR INSTANT RECOVERY</button>
            </Link>
            <Link to="SnapShot">
              <button>SNAPSHOT</button>
            </Link>
            <Link to="Remover_SnapShot">
              <button>REMOVER SNAPSHOT</button>
            </Link>
          </li>
          <h2>CONSULTAR PONTOS DE RESTAURAÇÃO</h2>
          <Form className="form" onSubmit={handleSubmit} schema={schema} >
            <Input name="Servidor" className="servidor" placeholder="Servidor" />
            <Input name="Rede8" className="check" type="checkbox" />
            <span>Marque essa opção caso o servidor seja rede 08 ou superior</span>

            <button className="confirm" type="submit">Consultar</button>
          </Form>
        </Container>
      </Can>
    </>
  );
}
