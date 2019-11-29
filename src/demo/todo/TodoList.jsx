import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return { todos: state.cats };
};
export default connect(mapStateToProps)(TodoList);
