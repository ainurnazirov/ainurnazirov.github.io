import React, { useState, useEffect } from "react";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

interface Todo {
    id: number;
    text: string;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>("");

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [todos]);

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            const newTodoItem: Todo = {
                id: Date.now(),
                text: newTodo,
            };
            setTodos([...todos, newTodoItem]);
            setNewTodo("");
        }
    };

    const handleDeleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <Button onClick={handleAddTodo} variant="contained" color="primary">
                Add Task
            </Button>

            <List>
                {todos.map((todo) => (
                    <ListItem key={todo.id}>
                        <ListItemText primary={todo.text} />
                        <Button
                            onClick={() => handleDeleteTodo(todo.id)}
                            variant="contained"
                            color="secondary"
                        >
                            Delete
                        </Button>
                        <Link to={`/todos/${todo.id}`}>View Details</Link>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TodoList;
