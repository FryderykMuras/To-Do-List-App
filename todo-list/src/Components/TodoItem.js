import React from 'react'
import {MdDeleteForever, MdModeEdit, MdArrowBack, MdArrowForward} from 'react-icons/md';
import "../Styles/TodoItem.css"

class TodoItem extends React.Component {
    render() {
        return (
            <div className="TodoItem">
                <div className={"ButtonDiv"}>
                    <button title={"Toogle State"} className="button"
                            onClick={() => this.props.handler(this.props.data.id, "toggleState")}>
                        <span>
                            {this.props.data.isDone ? <MdArrowBack/> : <MdArrowForward/>}
                        </span>
                    </button>
                    <button title={"Edit"} className="button"
                            onClick={() => this.props.handler(this.props.data.id, "edit")}>
                        <span>
                            <MdModeEdit/>
                        </span>
                    </button>
                    <button title={"Delete"} className="button"
                            onClick={() => this.props.handler(this.props.data.id, "delete")}>
                        <span>
                            <MdDeleteForever/>
                        </span>
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
