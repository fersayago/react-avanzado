const logMiddleware = store => dispatch => action => {
  console.log("Acción interceptada: " + action.type);
  console.log("Store antes: ", store.getState());
  dispatch(action);
  console.log("Store despues: ", store.getState());
}

export default logMiddleware;