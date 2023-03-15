"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos_1 = require("./../controllers/todos");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('/')
    .post(todos_1.createTodo)
    .get(todos_1.getTodos);
router.route('/:id')
    .patch(todos_1.updateTodo)
    .delete(todos_1.deleteTodo);
exports.default = router;
