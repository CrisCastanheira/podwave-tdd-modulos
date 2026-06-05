# 🎧 PodWave – Plataforma de Streaming de Podcasts

Projeto desenvolvido para a disciplina de Testes de Software utilizando a metodologia **TDD (Test-Driven Development)** com Node.js, Express, Sequelize, Vitest, Supertest e MySQL.

---

# Objetivo

O PodWave é uma plataforma de streaming de podcasts onde usuários podem explorar conteúdos, acompanhar seu progresso de reprodução, favoritar episódios e realizar avaliações.

O projeto foi desenvolvido seguindo o ciclo:

1. Red
2. Green
3. Refactor

conforme a metodologia TDD apresentada em aula.

---

# Funcionalidades

## Usuários

- Cadastro de usuários
- Login e logout
- Controle de sessão
- Exploração de podcasts
- Favoritar episódios
- Controle de progresso
- Avaliações e comentários

## Administradores

- Dashboard administrativo
- Gerenciamento de podcasts
- Gerenciamento de episódios
- Controle de usuários
- Controle de permissões

---

# Tecnologias Utilizadas

- Node.js
- Express.js
- EJS
- Sequelize
- MySQL
- Vitest
- Supertest
- Axios
- Axios Mock Adapter
- bcryptjs
- Nodemon

---

# Estrutura do Projeto

```txt
src/
│
├── config/
├── middlewares/
├── models/
├── modules/
│   ├── auth/
│   ├── user/
│   ├── podcast/
│   ├── episode/
│   ├── category/
│   ├── favorite/
│   ├── progress/
│   ├── review/
│   └── admin/
│
├── routes/
├── views/
├── public/
│
├── app.js
└── server.js
```

---

# Configuração

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env`:

```bash
copy .env.example .env
```

Linux/Mac:

```bash
cp .env.example .env
```

---

# Exemplo de .env

```env
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=podwave_db_tdd
DB_USER=root
DB_PASSWORD=sua_senha

SESSION_SECRET=podwave-secret
```

⚠️ Nunca envie sua senha real do banco para o GitHub.

---

# Banco de Dados

Criar o banco:

```sql
CREATE DATABASE podwave_db_tdd;
```

Testar conexão:

```bash
npm run db:test
```

Executar aplicação:

```bash
npm run dev
```

---

# URLs

Aplicação:

```txt
http://localhost:3000
```

Health Check:

```txt
http://localhost:3000/health
```

---

# Models

- User
- Podcast
- Episode
- Favorite
- Progress
- Review

---

# Testes Automatizados

## Testes Unitários

Implementados para as camadas Service:

- User Service
- Auth Service
- Podcast Service
- Episode Service
- Category Service
- Favorite Service
- Progress Service
- Review Service
- Admin Service
- Health Service

## Testes com Mock

Utilizando:

```js
vi.fn()
```

para simular dependências e isolar comportamentos.

## Testes de Integração

Implementados com:

```js
Supertest
```

Validando:

- GET /health
- GET /register
- POST /register
- GET /login
- POST /login
- POST /logout

Verificando:

- Status HTTP
- Redirecionamentos
- Respostas JSON
- Fluxos de sucesso e falha

## Testes de API Externa

Implementados com:

```js
Axios
Axios Mock Adapter
```

Simulando integração com API externa de podcasts.

---

# Cobertura de Código

O projeto possui cobertura automatizada utilizando:

```bash
npm run test:coverage
```

Atendendo aos requisitos mínimos definidos na avaliação.

---

# Requisitos da Avaliação Atendidos

## Nota 6

✅ Projeto estruturado em módulos

✅ Aplicação do ciclo TDD

✅ Mais de 10 testes unitários

✅ Uso de mocks

✅ RELATORIO.md

---

## Nota 7

✅ Apresentação PowerPoint/PDF

✅ Mais de 15 testes unitários

✅ Cobertura de código configurada

✅ Cobertura superior ao mínimo exigido

---

## Nota 8

✅ Testes de integração com Supertest

✅ Mais de 5 testes de integração

✅ Controller e rotas testadas

✅ Cenários de sucesso e falha

✅ Material preparado para vídeo explicativo

---

## Nota 9

✅ Mais de 10 testes de integração

✅ Testes de API utilizando Axios Mock Adapter

✅ Simulação de API externa

✅ Refatorações documentadas no RELATORIO.md

---

# Executando os Testes

Rodar testes:

```bash
npm test
```

Rodar cobertura:

```bash
npm run test:coverage
```

---

# Autor

Cristiano Castanheira Silva

Engenharia de Software