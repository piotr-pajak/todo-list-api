import { Router } from "express";
import {
    createTodo, deleteTodo,
    editTodo,
    getTodoById,
    getTodos,
    setFinished,
    setUnfinished,
} from "../controllers/index.controller";

const router = Router();

router.get("/todos", getTodos);
router.get("/todos/:id", getTodoById);
router.post("/todos", createTodo);
router.put("/todos/:id", editTodo);
router.put("/todos/setFinished/:id", setFinished);
router.put("/todos/setUnfinished/:id", setUnfinished);
router.delete("/todos/:id", deleteTodo);
export default router;