import { Request, Response } from "express";
import { pool } from "../database";
import { QueryResult } from "pg";

export const getTodos = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query("SELECT * FROM todos ORDER BY id ASC");
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json("Internal Server Error");
    }
};
export const getTodoById = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const id = Number(req.params.id);
        const response: QueryResult = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json("Internal Server Error");
    }
};

export const createTodo = async (
    req: Request,
    res: Response
) => {
    const { todo, iscomplete } = req.body;
    const response: QueryResult = await pool.query("INSERT INTO todos (todo, iscomplete) VALUES ($1, $2)", [todo, iscomplete]);
    res.json({
        message: "ToDo created successfully",
        body: {
            todo: { todo, iscomplete }
        }
    })
}

export const updateTodo = async (
    req: Request,
    res: Response
) => {
    const id = Number(req.params.id);
    const { todo } = req.body;

    const response: QueryResult = await pool.query("UPDATE todos SET todo = $1 WHERE id = $2", [
        todo,
        id
    ]);
    res.json("ToDo updated successfully");
}

export const setComplete = async (
    req: Request,
    res: Response
) => {
    const id = Number(req.params.id);

    const response: QueryResult = await pool.query("UPDATE todos SET iscomplete = true WHERE id = $1", [
        id
    ]);
    res.json("ToDo is complete");
}

export const setUnfinished = async (
    req: Request,
    res: Response
) => {
    const id = Number(req.params.id);

    const response: QueryResult = await pool.query("UPDATE todos SET iscomplete = false WHERE id = $1", [
        id
    ]);
    res.json("ToDo is not complete");
}
export const deleteTodo = async (
    req: Request,
    res: Response
) => {
    const id = Number(req.params.id);
    const response: QueryResult = await pool.query("DELETE FROM todos where id = $1", [id]);

    res.json(`ToDo with id = ${id} has been deleted successfully`);
}
