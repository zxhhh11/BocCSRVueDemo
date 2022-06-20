import { UserState, UserStore, store as user } from '@/store/modules/user';
import { createLogger, createStore } from 'vuex';
const debug = process.env.NODE_ENV !== 'production';

export type Store = UserStore<Pick<RootState, 'user'>>;
const plugins = debug ? [createLogger({})] : [];
export interface RootState {
  // app: AppState;
  // settings: SettingsState;
  // permission: PermissionState;
  user: UserState;
  // tagViews: TagsViewState;
}

export const store = createStore({
  plugins,
  modules: {
    user
  },
  strict: debug // 严格模式应在发布模式下关闭 已避免其运行带来的性能损耗
});

export function useStore(): Store {
  return store as Store;
}
