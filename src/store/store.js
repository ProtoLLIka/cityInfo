import { createStore } from 'redux';

const reduser = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_CITY':
      return action.text;
    case 'DROP_SEARCH_CITY':
      return '';
    default:
      return state;
  }
};

const store = createStore(reduser);
console.log(store.getState());
store.dispatch({ type: 'SET_SEARCH_CITY', text: 'Moscow' });
console.log(store.getState());
store.dispatch({ type: 'DROP_SEARCH_CITY' });
console.log(store.getState());
store.dispatch({ type: 'SET_SEARCH_CITY', text: 'LA' });
console.log(store.getState());
