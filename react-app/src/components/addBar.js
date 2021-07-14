import React from "react";

const AddBar = ({ toDo, setToDo, items, setItems }) => {
    const input = (e) => {
        console.log(e.target.value);
        setToDo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setItems([ ...items, 
            {text: toDo, completed: false, id: Math.random() * 1000}]);
        setToDo("");
    }

    return (
        <form>
            <input value={toDo} onClick={input} type="text" className="todo-item" />
            <button onClick={handleSubmit} className="add-button" type="submit">
                <i className="+"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
        </form>
    )
}

export default AddBar;