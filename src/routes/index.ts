import { Router } from "express";
import { createTodo, deleteTodo, getTodoById, getTodos, setComplete, updateTodo } from "../controllers/index.controller";

const router = Router();

router.get("/todos", getTodos);
router.get("/todos/:id", getTodoById);
router.post("/todos", createTodo);
router.put("/todos/:id", updateTodo);
router.put("/todos/setcomplete/:id", setComplete);
router.delete("/todos/:id", deleteTodo);
export default router;