// reducer.js
import { LOGOUT } from './actionTypes'; 

const initialState = {
  isSignin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        isSignin: false, 
      };
    default:
      return state;
  }
};

export default reducer;
