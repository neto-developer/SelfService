import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api_login from '../../../services/api_login';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { login, name, email, avatar_id, ...rest } = payload.data;
    const profile = Object.assign(
      { login, name, email, avatar_id },
      rest.password ? rest : {}
    );

    const response = yield call(api_login.put, 'alterUser', profile);
    toast.success('Perfil atualizado com sucesso!')

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar o perfil, confira seus dados!')

    yield put(updateProfileFailure());
  }

}


export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
]);
