import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import sagaMiddlewareMain from '../saga/sagaMiddleware';

let heroeData = {
  name: "Tony",
  race: "human",
  class: "druid",
  alive: true,
  hp: 100,
  level: 1,
  xp: 0,
  stats: []
}

let sagaMiddleware = createSagaMiddleware()

export default createStore (reducer, heroeData, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagaMiddlewareMain);