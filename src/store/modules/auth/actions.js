export function signInRequest(login, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { login, password },
  };
}

export function forgotRequest(email) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email },
  };
}

export function signInSuccess(token, user, permission) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user, permission },
  };
}

export function signUpRequest(login, name, email, password, permission) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { login, name, email, password, permission },

  }
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE'
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT'
  };
}



