import { fetchApi } from '../api';
import apiConfig from '../api/config';
import { ajax } from "rxjs/observable/dom/ajax";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import config from "../../config/config"
import deviceInfo from "../../utilities/deviceInfo";

const endPoints = {
	authenticate: '/uaa/oauth/token',
	revoke: '/users/auth/revoke',
	refresh: '/users/auth/refresh',
};

export const authenticate = (documentType, documentNumber, password) => {
  const deviceId = deviceInfo.getDeviceId();
  const dataString = `grant_type=password&username=${documentNumber}&password=${password}&tipoDocumento=${documentType}&deviceId=${deviceId}`;
  return ajax({
    crossDomain: true,
    url: `${config.host}${endPoints.authenticate}`,
    method: "POST",
    body: dataString,
    headers: {
      authorization: "Basic YWNtZTphY21lc2VjcmV0",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  });
};

export const refresh = (token, user) => fetchApi(endPoints.refresh, { token, user }, 'post', {
	'Client-ID': apiConfig.clientId,
	Authorization: null,
});

export const revoke = tokens => fetchApi(endPoints.revoke, { tokens }, 'post');
