const todoModel = require("../models/todos");

const createTodo = async (todo) => {
  return await todoModel.create(todo);
};

const getAllTodos = async () => {
  return await todoModel.find();
};

const getTodoByID = async (id) => {
  return await todoModel.findById(id);
};

const deleteTodoByID = async (id) => {
  return await todoModel.findByIdAndDelete(id);
};

const updateTodoByID = async (id, todo) => {
  return await todoModel.findByIdAndUpdate(id, todo);
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodoByID,
  deleteTodoByID,
  updateTodoByID,
};
