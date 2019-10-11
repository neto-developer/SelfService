import { takeLatest, call, put, all } from 'redux-saga/effects';


import history from '../../../services/history'
import api_login from '../../../services/api_login'

import { signInSuccess, signFailure } from './actions'
import { toast } from 'react-toastify';
export function* signIn({ payload }) {
  try {
    const { login, password } = payload;

    const response = yield call(api_login.post, 'login', {
      login,
      password,
    });

    const { token, user } = response.data;
    const { permission } = user

    //if(!user.provider){
    //  console.tron.error('Usuario não é um prestador');
    //  return;
    //}
    //Bearer
    api_login.defaults.headers['Authorization'] = `Baerer ${token}`;

    yield put(signInSuccess(token, user, permission));

    history.push(`${permission}/Dashboard`)


  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados')
    yield put(signFailure());
  }

}

export function* forgotPassword({ payload }) {
  try {
    const { email } = payload;
    yield call(api_login.post, 'forgotPassword', {
      email
    });
    history.push('/');
  } catch (err) {
    toast.error('Falha, verifique seus dados !');
    yield put(signFailure());
  }

}


export function* signUp({ payload }) {
  try {
    const { login, name, email, password, permission } = payload;
    yield call(api_login.post, 'createUser', {
      login,
      name,
      email,
      password,
      permission
    });
    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados !');
    yield put(signFailure());
  }

}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }
  const { token } = payload.auth;

  if (token) {
    api_login.defaults.headers['Authorization'] = `Baerer ${token}`;
  }

}

export function signOut() {
  history.push("/");
}


export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
