import { createStore } from "redux";

const tareas = [
  { id: 1, nombre:"curso (Store)", done:false},
  { id: 2, nombre:"trabajar (Store)", done:false},
  { id: 3, nombre:"bañarse (Store)", done:false}
]

export default createStore ((s,a) =>(s), tareas)