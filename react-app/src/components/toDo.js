import React from "react";

const ToDo = ({ text, item, items, setItems }) => {

    const deleted = () => {
        setItems(items.filter((ele) => ele.id !== item.id))
    }
    const completed = () => {
        setItems(items.map((ele) => {
            if (ele.id === item.id) {
                return {
                    ...ele, completed: !item.completed
                }
            }
            return ele;
        }))
    };

    return (
        <div className="todo">
            <li className="todo-item">X</li>
            <button onClick={completed} className="done-button">Complete</button>
            <button onClick={deleted} className="delete-button">Delete</button>
        </div>
    );
}

export default ToDo;