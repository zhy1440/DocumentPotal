import React from "react";
// import "./styles.css";
import TodoList from "./TodoList";
// import Footer from "./Footer";
const onTodoClick = () => {
    console.log("onTodoClick");
};
const TodoApp = ({ todo }) => {
    console.log(todo);
    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <TodoList onTodoClick={onTodoClick}/>
            {/* <Footer /> */}
        </div>
    );
};

export default TodoApp;
