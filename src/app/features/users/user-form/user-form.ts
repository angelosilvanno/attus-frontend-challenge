import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss'
})
export class UserFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<UserFormComponent>);
  
  userForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: User | null) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [this.data?.id || null],
      nome: [this.data?.nome || '', [Validators.required]],
      email: [this.data?.email || '', [Validators.required, Validators.email]],
      cpf: [this.data?.cpf || '', [Validators.required]],
      telefone: [this.data?.telefone || '', [Validators.required]],
      tipoTelefone: [this.data?.tipoTelefone || 'Celular', [Validators.required]]
    });
  }

  onSave(): void {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}