import { combineReducers } from 'redux';
import { Loading } from '../type/loading';
import { Term } from '../type/term';
import { LoadingActions, ReduxAction, SignupActions } from '../type/reduxAction';
import { Signup } from '../type/signup';

const loadingState: Loading = {
  loading: false,
};

const signupState: Signup = {
  email: '',
  name: '',
  pwd: '',
};

export const signupReducer = (state: Signup = signupState, action: SignupActions) => {
  switch (action.type) {
    case ReduxAction.signup:
      return { ...action };
    default:
      return state;
  }
};

//로딩화면
export const loadingReducer = (state: Loading = loadingState, action: LoadingActions) => {
  switch (action.type) {
    case ReduxAction.loading:
      return { loading: action.loading };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ loadingReducer, signupReducer });
