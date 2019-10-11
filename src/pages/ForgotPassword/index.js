import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup';

import { forgotRequest } from '../../store/modules/auth/actions'

import logo from '../../assets/logo.svg'

const schema = Yup.object().shape({
  login: Yup.string().required('O Login é obrigatorio'),
  password: Yup.string().required('A Senha é obrigatoria'),
});




export default function SingIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email }) {
    dispatch(forgotRequest(email));
  }


  return (
    <>
      <img src={logo} alt="Alterdata" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Informe o seu email" />
        <button type="submit">{loading ? 'Carregando...' : 'Recuperar'}</button>
        <Link to="/">Login</Link>
      </Form>

    </>
  );
}
