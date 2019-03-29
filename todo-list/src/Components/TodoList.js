import React from 'react'
import TodoItemsList from "./TodoItemsList"
import AddNewItemForm from "./AddNewItemForm"
import "../Styles/TodoList.css"

class TodoList extends React.Component{
    constructor(){
        super()
        this.state={
            isAddingNewItem: false
        }
        this.handleAddingNewItem = this.handleAddingNewItem.bind(this)
    }

    handleAddingNewItem(){
        this.setState(prevState=>{return {
            isAddingNewItem: !prevState.isAddingNewItem
        }
        })
    }


    render(){
        const doneItems = this.props.data.filter(item => item.isDone)
        const notDoneItems = this.props.data.filter(item => !item.isDone)
        const newItemForm = this.state.isAddingNewItem
                            ?<div className="NewItemForm">
                                <AddNewItemForm newItemHandler={this.props.newItemHandler} toogleDisplayHandler={this.handleAddingNewItem}/>
                            </div>
                            : <div className="NewItemForm">
                                <button onClick={this.handleAddingNewItem}>
                                    Add Item
                                </button>
                            </div>
        return(
            <section >
                <div className="TodoList">
                    <div className="Lists">
                        <TodoItemsList
                            isDone={false}
                            items={notDoneItems}
                            handler={this.props.handler}
                        />
                        <TodoItemsList
                            isDone={true}
                            items={doneItems}
                            handler={this.props.handler}
                        />
                    </div>
                    {newItemForm}
                </div>
            </section>
        )
    }
}

export default TodoList