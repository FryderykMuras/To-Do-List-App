import React from 'react'
import TodoItem from "./TodoItem"

export function TodoItemsList(){
    return(
        <div>
            <TodoItem data={{
                    title: "title1",
                    description: "description1"
                }}
            />
        </div>
    )
}

export default TodoItemsList

