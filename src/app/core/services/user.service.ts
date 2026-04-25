import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { 
      id: '1', 
      nome: 'Giana Sandrini', 
      email: 'giana@attornatus.com.br', 
      cpf: '123.456.789-00', 
      telefone: '47999999999', 
      tipoTelefone: 'Celular' 
    }
  ];

  constructor() {}

  getUsers(): Observable<User[]> {
    return of([...this.users]).pipe(delay(1000)); 
  }

  saveUser(user: User): Observable<User> {
    if (user.id) {
      const index = this.users.findIndex(u => u.id === user.id);
      this.users[index] = user;
    } else {
      user.id = Math.random().toString(36).substring(2, 9);
      this.users.push(user);
    }
    return of(user).pipe(delay(500));
  }
}