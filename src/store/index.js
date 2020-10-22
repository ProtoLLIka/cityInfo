export const searchStore = createStore(cityReducer, applyMiddleware(thunk, logger));
