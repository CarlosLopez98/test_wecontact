import { combineReducers } from 'redux';
import { combineEpics } from "redux-observable";

import { reducer as routeHistoryReducer } from './routeHistory/reducer';
import { reducer as sessionReducer } from './session/reducer';
import { reducer as persistReducer } from './persist/reducer';


export const reducer = combineReducers({
	routeHistory: routeHistoryReducer,
	session: sessionReducer,
	persist: persistReducer,
});

export const epic = combineEpics(
);
