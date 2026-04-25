import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../../core/models/user.model';

export const UserActions = createActionGroup({
  source: 'User API',
  events: {
    'Load Users': emptyProps(),
    'Load Users Success': props<{ users: User[] }>(),
    'Load Users Error': props<{ error: string }>(),
    'Add or Update User': props<{ user: User }>(),
    'Add or Update User Success': props<{ user: User }>(),
  }
});