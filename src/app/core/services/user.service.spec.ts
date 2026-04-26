import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar a lista de usuários', (done) => {
    service.getUsers().subscribe(users => {
      expect(users.length).toBeGreaterThan(0);
      expect(users[0].nome).toBe('Giana Sandrini');
      done();
    });
  });
});