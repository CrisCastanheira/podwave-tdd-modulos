# PodWave – Streaming de Podcasts

Setup inicial da aplicação **PodWave** usando Node.js, Express, EJS, Vitest e Sequelize com MySQL.

## Funcionalidades previstas

### Usuários
- Cadastro e autenticação
- Exploração de podcasts por categorias
- Reprodução contínua de episódios
- Favoritar episódios e marcar progresso
- Avaliação e comentários

### Administradores
- Dashboard com estatísticas
- Cadastro e gerenciamento de podcasts e episódios
- Controle de usuários e permissões

## Tecnologias

- Node.js
- Express
- EJS
- Sequelize
- MySQL
- Vitest
- Supertest
- Nodemon

## Como rodar

```bash
npm install
copy .env.example .env
npm test
npm run dev
```

No Linux/Mac, use:

```bash
cp .env.example .env
```

Acesse:

```txt
http://localhost:3000
```

Health Check:

```txt
http://localhost:3000/health
```

## Banco de dados

Crie o banco no MySQL/MariaDB antes de rodar o servidor:

```sql
CREATE DATABASE podwave_db_tdd;
```

Depois teste a conexão:

```bash
npm run db:test
```

Ao executar `npm run dev`, o Sequelize sincroniza os models com o banco usando:

```js
sequelize.sync({ alter: true })
```

## Models criados

- User
- Podcast
- Episode
- Favorite
- Progress
- Review

## Comandos GitHub

```bash
git init
git add .
git commit -m "Setup inicial do PodWave com Sequelize e TDD"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```


## Módulos e regras de negócio implementados

A aplicação foi organizada em módulos, seguindo a proposta de TDD da Aula 01:

- `auth`: login, logout, sessão e acesso administrativo.
- `user`: cadastro, validação de usuário e proteção de dados sensíveis.
- `podcast`: cadastro e gerenciamento de podcasts.
- `episode`: cadastro e reprodução sequencial de episódios.
- `category`: organização dos podcasts por categoria.
- `favorite`: regra para favoritar episódios sem duplicidade.
- `progress`: progresso de audição e marcação de episódio concluído.
- `review`: comentários, avaliações e média de notas.
- `admin`: dashboard administrativo com estatísticas.

Cada módulo possui pelo menos `service`, `controller`, `routes` e/ou testes automatizados em `__tests__`.
