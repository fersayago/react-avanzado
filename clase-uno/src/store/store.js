import { createStore } from "redux";
import reducer from '../reducers/reducer'

const tareas = [
  { id: 1, nombre:"curso (Store)", done:false},
  { id: 2, nombre:"trabajar (Store)", done:false},
  { id: 3, nombre:"bañarse (Store)", done:false}
]

export default createStore (reducer, tareas)