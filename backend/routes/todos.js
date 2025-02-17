const { Router } = require("express");
const todoController = require("../controllers/todos");

const router = Router();

router.post("/", todoController.createTodo);
router.get("/", todoController.getAllTodos);
router.get("/:id", todoController.getTodoByID);
router.delete("/:id", todoController.deleteTodoByID);
router.put("/:id", todoController.updateTodoByID);

module.exports = router;
