import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFormComponent } from './user-form';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideNgxMask } from 'ngx-mask';
import { vi } from 'vitest';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  const dialogRefMock = { close: vi.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFormComponent, NoopAnimationsModule],
      providers: [
        provideNgxMask(),
        { provide: MatDialogRef, useValue: dialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: null }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('o formulário deve ser inválido quando vazio', () => {
    expect(component.userForm.valid).toBeFalsy();
  });

  it('deve validar e-mail incorreto', () => {
    const email = component.userForm.controls['email'];
    email.setValue('email-invalido');
    expect(email.hasError('email')).toBeTruthy();
  });

  it('deve fechar o modal com os dados ao salvar formulário válido', () => {
    component.userForm.patchValue({
      nome: 'Teste',
      email: 'teste@email.com',
      cpf: '123.456.789-00',
      telefone: '47999999999',
      tipoTelefone: 'Celular'
    });
    component.onSave();
    expect(dialogRefMock.close).toHaveBeenCalled();
  });
});