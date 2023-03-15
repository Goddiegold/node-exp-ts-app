import { RequestHandler } from "express"
import { Todo } from "../models/todo"


const TODOS: Todo[] = []

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as { text: string }).text
    const newTodo = new Todo(`${TODOS.length + 1}`, text)

    TODOS.push(newTodo)
    return res.json({ message: 'Create the tod', createdTodo: newTodo }).status(201)
}


export const getTodos: RequestHandler = (req, res, next) => {
    return res.status(200).send({ todos: TODOS })
}


export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
    const todoId = req.params.id

    const text = (req.body as { text: string }).text

    if (!text) throw new Error("Enter a text!")

    const todoIndex = TODOS.findIndex(todo => todo.id === todoId)

    console.log(todoIndex);

    if (todoIndex < 0) {
        throw new Error("Couldn't find the todo!")
    }

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, text)

    return res.status(201).send({ message: "Updated!", updateTodo: TODOS[todoIndex] })
}


export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
    const todoId = req.params.id
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId)

    console.log(todoIndex);

    if (todoIndex < 0) {
        throw new Error("Couldn't find the todo!")
    }

    TODOS.splice(todoIndex, 1)


    return res.send({ message: "Todo deleted!" })
}


