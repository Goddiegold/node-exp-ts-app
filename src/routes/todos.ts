import {
    createTodo,
    deleteTodo,
    getTodos,
    updateTodo
}
    from './../controllers/todos';
import { Router } from "express"


const router = Router()

router.route('/')
    .post(createTodo)
    .get(getTodos)

router.route('/:id')
    .patch(updateTodo)
    .delete(deleteTodo)


export default router;