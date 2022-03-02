import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import { persistStore, persistCombineReducers  } from 'redux-persist';
import storage from 'redux-persist/es/storage'
import createFilter from 'redux-persist-transform-filter';
import logger from 'redux-logger'
import { createEpicMiddleware } from "redux-observable";

import { reducer as dataReducer } from './data/reducer';
import { reducer as servicesReducer, epic as servicesEpic } from './services/reducer-epic';

const config = {
  key: 'root',
  storage,
};

const appReducer = persistCombineReducers(config, {
	services: servicesReducer,
	data: dataReducer,
});

const epicMiddleware = createEpicMiddleware();
const store = createStore(appReducer, applyMiddleware(epicMiddleware)
  );

epicMiddleware.run(servicesEpic);

const saveAndLoadSessionFilter = createFilter(
  'services',
  ['session'],
  ['session']
);

/*persistStore(
  store,
	{},
  () => {
    store.getState()
  }
);*/

export default store;
