// @flow
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './redux';
import sagas from './saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(sagaMiddleware)));

sagas.forEach(saga => sagaMiddleware.run(saga));

export default store;
