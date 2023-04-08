import { LoadingAction, ReduxAction, SignupAction } from '../type/reduxAction';
import { Signup } from '../type/signup';

export const loadingAction = (loading: boolean): LoadingAction => ({
  type: ReduxAction.loading,
  loading,
});

export const signupAction = (signup: Signup): SignupAction => ({
  type: ReduxAction.signup,
  ...signup,
});
