## Objeto Router - Express

Uma instância isolada de rotas e middlewares.

Pode ser visto como uma 'mini-aplicação' ou como um middleware mesmo, já que pode ser colocado no `app.use()`

O `app.use()` monta a função que é dada a ele, podendo ser uma rota, middleware, função anônima.

---

Não queremos que a responsabilidade de criar um uuid seja da rota

Inclusive, não deveria ser responsabilidade das rotas de inserir dados no banco de dados como as aplicações desenvolvidas até agora fizeram. Elas deveriam chamar o repositório e ele seria responsável de interagir com o banco.

---

## Data Transfer Object - DTO

Um objeto responsável por transferir dados de um processo para outro

Um DTO não possui nenhum outro comportamento além de 'carregar' a informação e a capacidade de serializar/deserializar os dados para transferí-los. [DTO na Wikipedia](https://en.wikipedia.org/wiki/Data_transfer_object)

---

## Conceitos SOLID

**1. Single Responsibility Principle**
  - Cada classe deve ter apenas uma responsabilidade, um propósito.
  - Uma classe deve ter apenas um motivo para mudar.

**2. Dependency Inversion Principle**
  - A classe de alto nível não deve depender de uma tecnologia específica, mas sim de abstrações.

**3. Liskov Substitution Principle**
  - Um objeto de uma superclasse deve poder ser substituído por um objeto de sua subclasse sem quebrar a aplicação ou mudar seu comportamento.
  - Exemplo + prático: Uma interface de banco de dados define contratos que funcionam para diferentes tipos e tecnologias de bancos de dados, mesmo que os diferentes bancos de dados tenham implementações únicas para cada um. Todos podem extender a interface e funcionar.