import React from 'react'
import TodoItemsList from "./TodoItemsList"
import {MdAddCircleOutline} from 'react-icons/md'
import "../Styles/TodoList.css"

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddingNewItem: false
        };
        this.handleAddingNewItem = this.handleAddingNewItem.bind(this);
    }

    handleAddingNewItem() {
        this.setState(prevState => {
            return {
                isAddingNewItem: !prevState.isAddingNewItem
            }
        });
    }


    render() {
        const doneItems = this.props.data.filter(item => item.isDone);
        const notDoneItems = this.props.data.filter(item => !item.isDone);

        const doneProgress = Math.floor(doneItems.length / this.props.data.length * 100) + "%";
        document.title = "Todo List (" + notDoneItems.length + "/" + doneItems.length + ")";

        return (
            <div className="TodoList">
                <div className={"AddItemButtonDiv"}>

                    <div className={"ProgressBarDiv"}>
                        <div className={"ProgressBarTitle"}>Progress:</div>
                        <span className={"ProgressBar"} style={{width: doneProgress}}/>
                    </div>

                    <button title={"Create new item"} className={"AddItemButton"}
                            onClick={() => this.props.handleAddingNewItem("new")}>
                        <span>
                            <MdAddCircleOutline/>
                        </span>
                    </button>
                </div>

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
            </div>

        );
    }
}

export default TodoList