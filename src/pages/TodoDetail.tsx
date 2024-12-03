import React from "react";
import { useParams } from "react-router-dom";

const TodoDetail: React.FC = () => {
    const { id } = useParams();
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const todo = todos.find((todo: { id: number }) => todo.id === Number(id));

    if (!todo) {
        return <div>Task not found</div>;
    }

    return (
        <div>
            <h2>Task Details</h2>
            <p>ID: {todo.id}</p>
            <p>Text: {todo.text}</p>
        </div>
    );
};

export default TodoDetail;
