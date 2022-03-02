import store from '../../store';

import * as api from './api';
import * as selectors from './selectors';
import * as actionCreators from './actions';
import { initialState } from './reducer';
import NavigatorService from '../../utilities/navigator';

import 'rxjs/add/operator/map';
import {Alert} from "react-native";

const SESSION_TIMEOUT_THRESHOLD = 300; // Will refresh the access token 5 minutes before it expires

let sessionTimeout = null;

const setSessionTimeout = (duration) => {
	clearTimeout(sessionTimeout);
	sessionTimeout = setTimeout(
    clearSession2,
    duration * 1000
	);
};

const clearSession2 = () => {
  console.log("timer ejecutado");
  Alert.alert(
    'Alerta',
    'Su sesión ha terminado.',
    [
      {
        text: 'Aceptar', onPress: () => {
          console.log("Cerrando sesion");
          NavigatorService.hardReset('Auth');
        }
      },
    ],
    {cancelable: false}
  );
};

const clearSession = () => {
	clearTimeout(sessionTimeout);
	store.dispatch(actionCreators.update(initialState));
};

const onRequestSuccess = (ajaxResponse) => {
  const response = ajaxResponse.response;
  const tokens = {
    access: {
      type: response.token_type,
      value: response.access_token,
      expiresIn: response.expires_in,
    },
    refresh: {
      value: response.refresh_token,
    },
	};
	store.dispatch(actionCreators.update({ tokens, user: response.user, signInDetails: response.signInDetails }));
	setSessionTimeout(tokens.access.expiresIn);
};

const onRequestFailed = (exception) => {
	clearSession();
	throw exception;
};

export const refreshToken = () => {
	const session = selectors.get();

	if (!session.tokens.refresh.value || !session.user.id) {
		return Promise.reject();
	}

	return api.refresh(session.tokens.refresh, session.user)
	.then(onRequestSuccess)
	.catch(onRequestFailed);
};

export const authenticate = (documentType, documentNumber, password) =>
	api.authenticate(documentType, documentNumber, password)
    .map(onRequestSuccess)
    .catch(onRequestFailed);

export const revoke = () => {
	const session = selectors.get();
	return api.revoke(Object.keys(session.tokens).map(tokenKey => ({
		type: session.tokens[tokenKey].type,
		value: session.tokens[tokenKey].value,
	})))
	.then(clearSession())
	.catch(() => {});
};
