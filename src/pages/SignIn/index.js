import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup';
import { signInRequest } from '../../store/modules/auth/actions'

import logo from '../../assets/logo.svg'



const schema = Yup.object().shape({
  login: Yup.string().required('O Login é obrigatorio'),
  password: Yup.string().required('A Senha é obrigatoria'),
});


export default function SingIn() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ login, password }) {
    dispatch(signInRequest(login, password));

  }

  return (
    <>

      <img src={logo} alt="Alterdata" />
      <Form schema={schema} onSubmit={handleSubmit} >
        <Input name="login" type="login" placeholder="Login" />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Criar conta</Link>
      </Form>


    </>
  );
}
