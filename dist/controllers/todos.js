"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(`${TODOS.length + 1}`, text);
    TODOS.push(newTodo);
    return res.json({ message: 'Create the tod', createdTodo: newTodo }).status(201);
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    return res.status(200).send({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const text = req.body.text;
    if (!text)
        throw new Error("Enter a text!");
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    console.log(todoIndex);
    if (todoIndex < 0) {
        throw new Error("Couldn't find the todo!");
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, text);
    return res.status(201).send({ message: "Updated!", updateTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    console.log(todoIndex);
    if (todoIndex < 0) {
        throw new Error("Couldn't find the todo!");
    }
    TODOS.splice(todoIndex, 1);
    return res.send({ message: "Todo deleted!" });
};
exports.deleteTodo = deleteTodo;
