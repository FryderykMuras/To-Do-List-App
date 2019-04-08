import React from 'react'
import "../Styles/TodoItem.css"

class TodoItem extends React.Component {
    render() {
        return (
            <div className="TodoItem">
                <div className={"ButtonDiv"}>
                    <button className="button" onClick={() => this.props.handler(this.props.data.id, "toggleState")}>
                        <span>Toogle State</span>
                    </button>
                    <button className="button" onClick={() => this.props.handler(this.props.data.id, "edit")}>
                        <span>Edit</span>
                    </button>
                    <button className="button" onClick={() => this.props.handler(this.props.data.id, "delete")}>
                        <span>Delete item</span>
                    </button>
                </div>

                <div className="Content">
                    <h3 className={"Title"}>{this.props.data.title}</h3>

                    <p className={"Description"}>{this.props.data.description}</p>
                </div>
            </div>
        )
    }
}

export default TodoItem
