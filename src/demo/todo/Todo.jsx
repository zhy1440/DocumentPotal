import React from "react";
import PropTypes from "prop-types";

const Todo = ({ title, completed, onClick }) => {
    return (
        <li
            onClick={onClick}
            style={{
                textDecoration: completed ? "line-through" : "none"
            }}>
            {title}
        </li>
    );
};

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;
