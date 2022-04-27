import { AUTH_USER, AUTH_ERROR } from '../components/actions/types';
const INITIAL_STATE = {
  authenticated: '',
  errorMessage: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default reducer;
