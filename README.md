# Attus - Avaliação Técnica (Front End - Angular)

Este repositório contém a solução para o desafio técnico da **Attus**. A aplicação consiste em um sistema de gerenciamento de usuários desenvolvido com as versões mais recentes do ecossistema Angular.

## Introdução

O objetivo deste projeto é avaliar conhecimentos em Angular 17+, RxJS, NgRx, Angular Material e integração com APIs (mockadas).

**Funcionalidades principais:**

* Listagem de usuários com estado de loading e tratamento de erro
* Filtro de pesquisa reativo com `debounceTime` de 300ms
* Criação e edição de usuários através de modais (`MatDialog`)
* Formulários reativos com validações em tempo real
* Gerenciamento de estado global utilizando a arquitetura NgRx
  
### Pré-requisitos

Antes de começar, você precisa ter instalado:

* Node.js versão 18 ou superior
* Angular CLI versão 17 ou superior
* npm

### Instalações necessárias:

Instalar Angular CLI:

```
npm install -g @angular/cli@17
```

Instalar Angular Material:

```
ng add @angular/material
```

Instalar NgRx:

```
npm install @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools
```


### Guia de instalação

Siga os passos abaixo para rodar o projeto localmente.

**Passo 1: Clonar o repositório**

```
git clone https://github.com/angelosilvanno/attus-frontend-challenge.git
```

**Passo 2: Entrar na pasta do projeto**

```
cd attus-frontend-challenge
```

**Passo 3: Instalar dependências**

```
npm install
```

**Passo 4: Executar o projeto**

```
ng serve
```

Depois disso, acesse no navegador:

```
http://localhost:4200/
```


## Executando os testes 

Para rodar os testes automatizados:

```
ng test
```

Isso vai abrir o ambiente de testes no navegador e mostrar os resultados.

## Tecnologias usadas:

* ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge\&logo=angular\&logoColor=white)
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge\&logo=typescript\&logoColor=white)
* ![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge\&logo=rxjs\&logoColor=white)
* ![NgRx](https://img.shields.io/badge/ngrx-%23BA2BD2.svg?style=for-the-badge\&logo=ngrx\&logoColor=white)
* ![Angular Material](https://img.shields.io/badge/angular_material-%230081CB.svg?style=for-the-badge\&logo=angular\&logoColor=white)

## Autor

* **Angelo Silvano** - Desenvolvedor Full Stack - [angelosilvanno](https://github.com/angelosilvanno)

## Gratidão

* Agradeço à equipe da **Attus** pela oportunidade de realizar este desafio técnico.
* Meu linkedin: [angelosilvanno](https://www.linkedin.com/in/angelosilvanno/)
