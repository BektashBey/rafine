const { Router } = require("express");
const todoController = require("../controllers/todos");

const router = Router();

router.post("/", todoController.createTodo);
router.get("/", todoController.getAllTodos);

module.exports = router;
