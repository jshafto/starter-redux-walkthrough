import React from "react";

const AddBar = () => {
    const input = (e) => {
        console.log(e);
    };

    return (
        <form>
            <input type="text" className="todo-item" />
            <button className="add-button" type="submit">
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