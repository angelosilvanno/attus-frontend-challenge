import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

// Material Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// State & Components
import { UserActions } from '../../../state/user/user.actions';
import { selectAllUsers, selectUserLoading, selectUserError } from '../../../state/user/user.selectors';
import { UserFormComponent } from '../user-form/user-form';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    MatInputModule, 
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserListComponent implements OnInit {
  private store = inject(Store);
  private dialog = inject(MatDialog);
  private destroyRef = inject(DestroyRef);
  
  searchControl = new FormControl('');
  
  users$ = this.store.select(selectAllUsers);
  loading$ = this.store.select(selectUserLoading);
  error$ = this.store.select(selectUserError);

  filteredUsers$ = this.users$;

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());

    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(searchTerm => {
      this.filteredUsers$ = this.users$.pipe(
        map(users => users.filter(user => 
          user.nome.toLowerCase().includes(searchTerm?.toLowerCase() || '')
        ))
      );
    });
  }

  onAdd() {
    this.openDialog();
  }

  onEdit(user: User) {
    this.openDialog(user);
  }

  private openDialog(user: User | null = null) {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '600px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(UserActions.addOrUpdateUser({ user: result }));
      }
    });
  }
}