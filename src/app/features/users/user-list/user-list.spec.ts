import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MatDialog } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserActions } from '../../../state/user/user.actions';
import { vi } from 'vitest';
import { of } from 'rxjs';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let store: MockStore;
  
  const dialogMock = {
    open: vi.fn().mockReturnValue({
      afterClosed: () => of(null)
    })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserListComponent, 
        NoopAnimationsModule
      ],
      providers: [
        provideMockStore({ 
          initialState: { user: { users: [], loading: false, error: null } } 
        })
      ]
    })
    .overrideComponent(UserListComponent, {
      set: {
        providers: [
          { provide: MatDialog, useValue: dialogMock }
        ]
      }
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    
    vi.spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('deve disparar loadUsers ao iniciar', () => {
    expect(store.dispatch).toHaveBeenCalledWith(UserActions.loadUsers());
  });

  it('deve abrir o modal ao clicar em adicionar', () => {
    component.onAdd();
    expect(dialogMock.open).toHaveBeenCalled();
  });
});