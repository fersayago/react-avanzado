import { createStore, applyMiddleware } from "redux";
import reducer from '../reducers/reducer'
import logMiddleware from "../middlewares/logMiddleware";
import delayMiddleware from "../middlewares/delayMiddleware";
import fetchMiddleware from "../middlewares/fetchMiddleware";
import { initTareas } from "../actions/action-creators";

const tareas = [
  { id: 1, nombre:"curso (Store)", done:false},
  { id: 2, nombre:"trabajar (Store)", done:false},
  { id: 3, nombre:"bañarse (Store)", done:false}
]

let store = createStore(
  reducer,
  tareas,
  applyMiddleware(delayMiddleware, logMiddleware, fetchMiddleware)
)

store.dispatch(initTareas());

export default store;