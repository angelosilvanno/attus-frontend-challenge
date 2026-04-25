import { createReducer, on } from '@ngrx/store';
import { User } from '../../core/models/user.model';
import { UserActions } from './user.actions';

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => ({ ...state, loading: true, error: null })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
  on(UserActions.loadUsersError, (state, { error }) => ({ ...state, error, loading: false })),
  on(UserActions.addOrUpdateUserSuccess, (state, { user }) => {
    const exists = state.users.find(u => u.id === user.id);
    const updatedUsers = exists 
      ? state.users.map(u => u.id === user.id ? user : u)
      : [...state.users, user];
    return { ...state, users: updatedUsers };
  })
);