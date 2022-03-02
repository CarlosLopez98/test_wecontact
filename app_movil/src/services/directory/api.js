import { ajax } from "rxjs/observable/dom/ajax";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import config from "../../config/config"

const endPoints = {
	appParams: '/middleware/app-params',
};

export const getAppParams = () => {
  return ajax.getJSON(`${config.host}${endPoints.appParams}`, { authorization: "Basic YWNtZTphY21lc2VjcmV0" });
};
