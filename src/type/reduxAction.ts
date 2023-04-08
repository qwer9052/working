import type { Action, Dispatch } from 'redux';
import { Loading } from '../type/loading';
import { Signup } from './signup';

export type SignupAction = Action<ReduxAction.signup> & Signup;

export type SignupActions = SignupAction;

export type LoadingAction = Action<ReduxAction.loading> & Loading;

export type LoadingActions = LoadingAction;

export enum ReduxAction {
  loading = 'loading',
  signup = 'signup',
}
