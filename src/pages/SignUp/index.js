import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup';

import logo from '../../assets/logo.svg'

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  login: Yup.string().required('O Usuario é obrigatorio'),
  name: Yup.string().required('O Nome é obrigatorio'),
  email: Yup.string().required('O email é obrigatorio'),
  password: Yup.string().min(6, 'A senha deve conter no minimo 6 caracteres').required('A Senha é obrigatoria'),
});

export default function SingUp() {
  const dispatch = useDispatch();

  function handleSubmit({ login, name, email, password }) {
    const permission = 'Limitado'
    dispatch(signUpRequest(login, name, email, password, permission));

  }
  return (
    <>
      <img src={logo} alt="Alterdata" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="login" type="text" placeholder="Login" />
        <Input name="name" type="text" placeholder="Nome" />
        <Input name="email" type="text" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
