import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../core/services/user.service';
import { UserActions } from './user.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadUsers),
    switchMap(() => this.userService.getUsers().pipe(
      map(users => UserActions.loadUsersSuccess({ users })),
      catchError(err => of(UserActions.loadUsersError({ error: err.message })))
    ))
  ));

  saveUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.addOrUpdateUser),
    switchMap(({ user }) => this.userService.saveUser(user).pipe(
      map(savedUser => UserActions.addOrUpdateUserSuccess({ user: savedUser })),
      catchError(err => of(UserActions.loadUsersError({ error: err.message })))
    ))
  ));
}