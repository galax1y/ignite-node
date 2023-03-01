## Objeto Router - Express

Uma instância isolada de rotas e middlewares.

Pode ser visto como uma 'mini-aplicação' ou como um middleware mesmo, já que pode ser colocado no `app.use()`

O `app.use()` monta a função que é dada a ele, podendo ser uma rota, middleware, função anônima.