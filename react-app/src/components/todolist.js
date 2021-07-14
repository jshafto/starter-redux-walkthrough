import React from "react";
import ToDo from "./toDo";

const List = ({ items, setItems }) => {
    return (
        <div class="list-container">
            <ul class="list">
                {items.map(item => (
                    <ToDo 
                        text={item.text} 
                        key={item.id}
                        items={items} 
                        setItems={setItems}
                        item={item}
                    />
                ))}
            </ul>
        </div>
    )
}

export default List;