import React from 'react'
import TodoItem from "./TodoItem"
import "../Styles/TodoItemsList.css"

export function TodoItemsList(props){
    const className = props.isDone ? "TodoItemsListDone" : "TodoItemsList";
    const elements = props.items.map((item)=><TodoItem handler={props.handler}
                                                       key={item.id}
                                                       data={item}
                                                        />)
    return(
        <div className={className}>
            {elements}
        </div>
    )
}

export default TodoItemsList

