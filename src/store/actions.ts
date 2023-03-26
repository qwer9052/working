import { LoadingAction, ReduxAction } from '../type/reduxAction';

export const loadingAction = (loading: boolean): LoadingAction => ({
  type: ReduxAction.loading,
  loading,
});
