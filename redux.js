const API = 'https://api.wegiel.net/v1/ogloszenia';

export const apiMiddleware = store => next => action => {
   next(action);
  switch (action.type) {
    case 'GET_DATA':
      store.dispatch({type: 'GET_DATA_LOADING'});
      fetch(API)
        .then(response => response.json())
        .then(data => next({
          type: 'GET_DATA_RECEIVED',
          data
        }))
        .catch(error => next({
          type: 'GET_DATA_ERROR',
          error
        }));
      break;    
    default:
      break;
  }
};

export const reducer = (state = { posts: [], loading: true }, action) => {
  switch (action.type) {
    case 'GET_DATA_LOADING':
      return {
        ...state,                   
        loading: true,              
      };
    case 'GET_DATA_RECEIVED':
      return {
        loading: false,            
        posts: action.data.posts, 
      };
    case 'GET_DATA_ERROR':
      return state;
    default:
      return state;
    }
};