const express = require("express");

const app = express();

app.use(express.json());

app.listen(3000);

var users = [
  {
    id: "0",
    name: "galaxY",
  },
  {
    id: "1",
    name: "Anna",
  },
];

app.get("/", (request, response) => {
  response.json(users);
});

app.post("/users", (request, response) => {
  users.push(request.body);
  response.send("User added.");
});

app.put(`/users/:id`, (request, response) => {
  let userId = request.params.id;

  users = users.map((user) => {
    if (user.id === userId) return request.body;
    else return user;
  });
  response.send(
    `Put recebido! substuituindo usuario de id ${userId} por ${JSON.stringify(
      request.body
    )}.`
  );
});

app.patch("/users/:id", (request, response) => {
  response.send("Patch recebido!");
});

app.delete(`/users/:id`, function (request, response) {
  let userIdToDelete = request.params.id;

  users = users.filter((user) => user.id !== userIdToDelete);
  response.send("Usuário deletado");
});
