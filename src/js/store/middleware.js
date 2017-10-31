const middleware = store => next => action => {
     next(action)
     localStorage.setItem('Store', JSON.stringify(store.getState()));
     return;

}
export default middleware;