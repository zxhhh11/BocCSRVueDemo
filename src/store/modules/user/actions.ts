import { ActionContext, ActionTree } from 'vuex';
import { UserState, state } from './state';
import { loginRequest, userInfoRequest } from '@/apis/user';

import { Mutations } from './mutations';
import { RootState } from '@/store';
// import { PermissionActionType } from '../permission/action-types';
// import { RouteRecordRaw } from 'vue-router';
import { UserActionTypes } from './action-types';
import { UserMutationTypes } from './mutation-types';
import { logout } from '@/apis/user';
import router from '@/router/index';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<UserState, RootState>, 'commit'>;

export interface Actions {
  [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    userInfo: { username: string; password: string }
  ): void;
  [UserActionTypes.ACTION_RESET_TOKEN]({
    commit
  }: AugmentedActionContext): void;
  [UserActionTypes.ACTION_GET_USER_INFO]({
    commit
  }: AugmentedActionContext): void;
  [UserActionTypes.ACTION_LOGIN_OUT]({ commit }: AugmentedActionContext): void;
  [UserActionTypes.INCREMENT](
    { commit }: AugmentedActionContext,
    num: number
  ): void;
}

export const actions: ActionTree<UserState, RootState> & Actions = {
  async [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    userInfo: { username: string; password: string }
  ) {
    let { username, password } = userInfo;
    username = username.trim();
    console.log(username, password); //
    await loginRequest() //{ username, password }
      .then(async (res: any) => {
        if (res?.code === 0 && res.data.accessToken) {
          // setToken(res.data.accessToken);
          commit(UserMutationTypes.SET_TOKEN, res.data.accessToken);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  },

  [UserActionTypes.ACTION_RESET_TOKEN]({ commit }: AugmentedActionContext) {
    // removeToken();
    commit(UserMutationTypes.SET_TOKEN, '');
    commit(UserMutationTypes.SET_ROLES, []);
  },

  async [UserActionTypes.ACTION_GET_USER_INFO]({
    commit
  }: AugmentedActionContext) {
    if (state.token === '') {
      throw Error('token is undefined!');
    }
    await userInfoRequest().then((res: any) => {
      if (res?.code === 0) {
        commit(UserMutationTypes.SET_ROLES, res.data.roles);
        commit(UserMutationTypes.SET_NAME, res.data.name);
        commit(UserMutationTypes.SET_AVATAR, res.data.avatar);
        commit(UserMutationTypes.SET_INTRODUCTION, res.data.introduction);
        commit(UserMutationTypes.SET_EMAIL, res.data.email);
        return res;
      } else {
        throw Error('Verification failed, please Login again.');
      }
    });
  },

  async [UserActionTypes.ACTION_LOGIN_OUT]({ commit }: AugmentedActionContext) {
    await logout().then((res) => {
      console.log(res, router, '555');
    });
    router
      .push({
        path: '/login'
      })
      .catch((err) => {
        console.warn(err);
      });
    commit(UserMutationTypes.SET_TOKEN, '');
    commit(UserMutationTypes.SET_ROLES, []);
  },
  [UserActionTypes.INCREMENT]({ commit }: AugmentedActionContext, num) {
    console.log({ commit });

    commit(UserMutationTypes.SET_COUNT, num);
  }
};
