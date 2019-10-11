import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';


import { updateProfileRequest } from '../../store/modules/user/actions'

import AvatarInput from './AvatarInput'

import { Container } from './styles';

const schema = Yup.object().shape({
  login: Yup.string().required('O Login é obrigatorio'),
  name: Yup.string().required('A Senha é obrigatoria'),
  email: Yup.string().required('A Senha é obrigatoria'),
  password: Yup.string().required('A Senha é obrigatoria'),
  avatar_id: Yup.string(),
});


export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }



  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit} schema={schema} >
        <AvatarInput name="avatar_id" />

        <Input name="login" placeholder="Login" />
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Insira o seu Password para confirmar a alteração" />

        <button type="submit">Atualizar perfil</button>
      </Form>
    </Container>
  );
}
