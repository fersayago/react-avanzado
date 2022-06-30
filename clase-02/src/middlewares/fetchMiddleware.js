import axios from 'axios';
import {ACT_INIT_TAREA } from '../actions/action-types';

const fetchMiddleware = store => dispatch => action => {
  if (action.type === ACT_INIT_TAREA){
    const url ="http://localhost:3001/tareas";
    axios.get(url).then( (resp) => {
      action.payload = resp.data;
      dispatch(action);
      /* o tambien se puede
      dispatch({
        type: ACT_INIT_TAREA,
        payload: resp.data
      })
      */
    })
  } else {
    dispatch(action);
  }
}

export default fetchMiddleware;