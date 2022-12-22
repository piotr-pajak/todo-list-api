import { Router } from "express";
import {
    createTodo,
    deleteTodo,
    editTodo,
    getTodoById,
    getTodos,
    toggleFinishedValue,
} from "../controllers/index.controller";

const router = Router();

router.get("/todos", getTodos);
router.get("/todos/:id", getTodoById);
router.post("/todos", createTodo);
router.put("/todos/:id", editTodo);
router.put("/todos/toggleFinishedValue/:id", toggleFinishedValue);
router.delete("/todos/:id", deleteTodo);
export default router;