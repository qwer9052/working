import type { Action, Dispatch } from 'redux';
import { Loading } from '../type/loading';

export type LoadingAction = Action<ReduxAction.loading> & Loading;

export type LoadingActions = LoadingAction;

export enum ReduxAction {
  loading = 'loading',
}
