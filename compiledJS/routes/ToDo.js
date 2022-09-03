"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ ToDoList: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const timeNow = new Date();
    const newToDo = {
        id: timeNow.toISOString(),
        text: body.text
    };
    todos.push(newToDo);
    res.status(200).json({ message: "ToDo added", newToDo, todos });
});
router.get('/todo', (req, res, next) => {
    res.status(200).json(todos);
});
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.body;
    const body = req.body;
    const tid = params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text
        };
        return res.status(200).json({ message: "Done", todos: todos });
    }
    res.status(404).json({ message: "Not found" });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.body;
    const tid = params.todoId;
    todos = todos.filter(todo => {
        todo.id !== tid;
    });
    res.status(200).json({ message: "Done", todos: todos });
});
exports.default = router;
