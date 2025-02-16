const todoModel = require("../models/todos");

const createTodo = async (todo) => {
  return await todoModel.create(todo);
};

const getAllTodos = async () => {
  return await todoModel.find();
};

module.exports = { createTodo, getAllTodos };
