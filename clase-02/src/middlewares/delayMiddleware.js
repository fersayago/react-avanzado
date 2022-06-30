const delayMiddleware = store => next => action => {
  setTimeout(() => {
    next(action);
  }, 1500)
}

export default delayMiddleware