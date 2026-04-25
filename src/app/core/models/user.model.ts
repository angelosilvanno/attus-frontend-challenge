export interface User {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  tipoTelefone: 'Celular' | 'Fixo';
}