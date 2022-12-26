# Fundamentos do NodeJS

`NodeJS` permite a execução da linguagem `JavaScript` do lado do servidor.

#### `Características do Node`

- `Arquitetura Event Loop`
- `Single Thread`
- `Non-blocking I/O`

#### `Gerenciadores de pacotes`

- `npm`
- `yarn`

#### `Frameworks`

- `Express`
- `Egg.js`
- `Nest.js`
- `Adonis.js`

---

## API - Application Programming Interface

Conjunto de especificações de possíveis interações entre aplicativos.

Uma API deve ter uma documentação para que o desenvolvedor 'do outro lado' entenda que ferramentas estão sendo disponibilizadas.

`REST` é um modelo de arquitetura (Representational State Transfer) para construção das APIS

### `Regras REST`

1. `Divisão Client-Server`

Nenhum destes precisa conhecer um ao outro.

2. `Stateless`

O servidor não armazena estado.

3. `Cache`

A aplicação deve ser construída de modo que dê suporte a cache.

4. `Interface Uniforme`

Os recursos devem ser disponibilizados com um padrão de identificação
`https://myapi.com/users`

A representação do recurso solicitado pode ser entregue em vários formatos ex.: JSON, HTML, XML, ...,

Deve conter mensagens auto-descritivas.

HATEOAS (Hypertext As The Engine Of Application State)

5. `Camadas`

A aplicação deve permitir que existam camadas entre o Client e o Server

6. `Código sob demanda`

A aplicação deve permitir que as funcionalidades do cliente sejam extendidas na forma de scripts.

---

### `Métodos de Requisição - HTTP Verbs`

`GET` - Leitura
`POST` - Criação
`PUT` - Atualização
`DELETE` - Deleção
`PATCH` - Atualização parcial

### `Retornos - HTTP Codes`

`1XX` - Informativo
`2XX` - Confirmação
`3XX` - Redirecionamento
`4XX` - Erro do cliente
`5XX` - Erro do servidor

### `Parâmetros das Requisições`

`Header Params` - Informações contidas nos metadados do request HTTP
`Query Params` - Informações contidas no final de uma URL no formato: `/api/users` **`?key=value&key2=value2`** onde & é um separador
`Route Params` - Informação está explicita na URL como se fosse uma rota, ex.: `api/users/{id}`, id é um número
`Body Params` - Informação está contida no corpo da requisição, normalmente JSON: ex.: `{name="Lucas" username="Galax1y"}`

---

## `Express`

**É um framework que fornece recursos para construção de servidores web.**

Instalar express: `npm i express`

Configuração básica do `Express`

```js
const express = require("express");

const app = express();

app.listen(3000);
```

Configurando uma rota `GET`

```js
app.get("/", (request, response) => {
  response.send("Hello World");
});
```

Cada mudança no código precisa reiniciar o servidor.

Nodemon é uma dependência de desenvolvimento que faz esse reload na aplicação e aumenta a produtividade.

Instalando como dependência de desenvolvimento: `npm i nodemon -D`

Adicionando em `package.json` pra ter um atalho mais fácil. Caso contrário seria `nodemon src/index.js`

```json
  "scripts": {
    "dev": "nodemon src/index.js"
  },
```

E, por último, rodar com `npm run dev`.

Pronto, agora as mudanças podem ser feitas sem desligar o servidor.

Configurando as outras rotas principais:

```js
app.post("/users", (request, response) => {
  users.push(request.body);
  response.send("User added.");
});
```

```js
app.put(`/users/:id`, (request, response) => {
  let userId = request.params.id;

  users = users.map((user) => {
    if (user.id === userId) return request.body;
    else return user;
  });

  response.send(`Put recebido.`);
});
```

```js
app.delete(`/users/:id`, function (request, response) {
  let userIdToDelete = request.params.id;

  users = users.filter((user) => user.id !== userIdToDelete);
  response.send("Usuário deletado");
});
```

Cuidado com a rota, tem que ser escrita com todas as barras: `/users/:id`

O `:id` é a maneira de coletar o `Route Parameter` **`id`** é acessado por `request.params.id`.

`Route Parameters` são usados para identificar um recurso, são acessados com `request.params`
`Query Parameters` são usados para paginação / filtros, são acessados com `request.query` e são opcionais.
`Body Parameters` são os objetos (usualmente JSON) usados nas ações de inserção / alteração, são acessados com `request.body`.
