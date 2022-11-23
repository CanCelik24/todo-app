import { useState } from 'react';
import Footer from './todo/Footer';
import Form from "./todo/Form";
import List from './todo/List';

function TodoApp() {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );

    const [hide, setHide] = useState("All");

    return (
        <div className='todoapp'>
            <Form todos={todos} setTodos={setTodos} />{""}
            <List todos={todos} setTodos={setTodos} hide={hide} />{""}
            <Footer todos={todos} setTodos={setTodos} setHide={setHide} />{""}
        </div>
    );
}

export default TodoApp;