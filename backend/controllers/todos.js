const todoService = require("../services/todos");

const createTodo = async (req, res) => {
  try {
    const payload = {
      description: req.body.description,
      status: "TODO",
    };

    const todo = await todoService.createTodo(payload);

    if (!todo) {
      return res.status(400).json({
        error: "Hata oluştu",
      });
    }

    return res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const getAllTodos = async (req, res) => {
  try {
    const todos = await todoService.getAllTodos();

    return res.status(200).json(todos);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const getTodoByID = async (req, res) => {
  try {
    const todo = await todoService.getTodoByID(req.params.id);

    if (!todo) {
      return res.status(400).json({ error: "to do bulunamadı" });
    }

    return res.status(200).json(todo);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const deleteTodoByID = async (req, res) => {
  try {
    const todo = await todoService.deleteTodoByID(req.params.id);

    if (!todo) {
      return res.status(400).json({ error: "to do bulunamadı" });
    }

    return res.status(200).json({ message: "to do başarıyla silinmiştir." });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const updateTodoByID = async (req, res) => {
  try {
    const todo = await todoService.updateTodoByID(req.params.id, req.body);

    if (!todo) {
      return res.status(400).json({ error: "to do bulunamadı" });
    }

    return res
      .status(200)
      .json({ message: "to do başarıyla güncellenmiştir." });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodoByID,
  deleteTodoByID,
  updateTodoByID,
};
