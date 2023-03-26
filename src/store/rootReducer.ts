import { combineReducers } from 'redux';
import { Loading } from '../type/loading';
import { LoadingActions, ReduxAction } from '../type/reduxAction';

const loadingState: Loading = {
  loading: false,
};

// export const baseReducer = (state: AppState = initialState, action: UserActions) => {
//   switch (action.type) {
//     case 'signUpProc':
//       return { ...state, signUpInfo: action.signUpInfo };
//     default:
//       return state;
//   }
// };

//로딩화면
export const loadingReducer = (state: Loading = loadingState, action: LoadingActions) => {
  switch (action.type) {
    case ReduxAction.loading:
      return { loading: action.loading };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ loadingReducer });
