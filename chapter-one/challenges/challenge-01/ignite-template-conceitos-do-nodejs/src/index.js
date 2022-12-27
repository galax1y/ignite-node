const express = require("express");
const cors = require("cors");

const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = users.find((user) => user.username === username);

  user
    ? (request.user = user)
    : response.status(400).json({ error: "User not found" });

  next();
}

app.post("/users", (request, response) => {
  const { name, username } = request.body;

  const newUser = {
    id: uuidv4(),
    name: name,
    username: username,
    todos: [],
  };

  const isUsernameTaken = users.some((user) => user.username === username);

  if (isUsernameTaken) {
    return response.status(400).json({ error: "Username already taken" });
  }

  users.push(newUser);
  return response.status(201).json(newUser);
});

app.get("/todos", checksExistsUserAccount, (request, response) => {
  const user = request.user;

  return response.json(user.todos);
});

app.post("/todos", checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.body;
  const user = request.user;

  const newTodo = {
    id: uuidv4(),
    title: title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date(),
  };

  user.todos.push(newTodo);

  return response.status(201).json(newTodo);
});

// alterar title e deadline da tarefa apontada com :id
app.put("/todos/:id", checksExistsUserAccount, (request, response) => {
  const { id } = request.params;
  const { title, deadline } = request.body;
  const user = request.user;

  const todo = user.todos.find((todo) => todo.id === id);

  if (!todo) {
    return response.status(404).json({ error: "Todo not found" });
  }

  todo.title = title;
  todo.deadline = new Date(deadline);
  todo.done = false;

  response.status(200).json(todo);
});

app.patch("/todos/:id/done", checksExistsUserAccount, (request, response) => {
  const { id } = request.params;
  const user = request.user;

  const todo = user.todos.find((todo) => todo.id === id);

  if (!todo) {
    return response.status(404).json({ error: "Todo not found" });
  }

  const updatedTodo = {
    id: todo.id,
    title: todo.title,
    done: true,
    deadline: new Date(todo.deadline),
    created_at: new Date(todo.created_at),
  };

  user.todos.splice(user.todos.indexOf(todo), 1, updatedTodo);

  response.status(200).json(updatedTodo);
});

app.delete("/todos/:id", checksExistsUserAccount, (request, response) => {
  const { id } = request.params;
  const user = request.user;

  const todo = user.todos.find((todo) => todo.id === id);

  if (!todo) {
    return response.status(404).json({ error: "Todo not found" });
  }

  user.todos.splice(user.todos.indexOf(todo), 1);

  response.status(204).json(user.todos);
});

module.exports = app;
