import React from 'react';
import TodoItem from "./TodoItem";
import "../Styles/TodoItemsList.css";

export function TodoItemsList(props){
    const id = props.isDone ? "ListDone" : "ListNotDone";
    const elements = props.items.map((item)=><TodoItem handler={props.handler}
                                                       key={item.id}
                                                       data={item}
                                                        />);
    return(
        <div className={"TodoItemsList"} id={id}>
            {elements}
        </div>
    );
}

export default TodoItemsList;

