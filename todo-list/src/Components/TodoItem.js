import React from 'react'
import {MdDeleteForever, MdModeEdit, MdArrowBack, MdArrowForward} from 'react-icons/md';
import "../Styles/TodoItem.css"

function TodoItem(props) {

    return (
        <div className="TodoItem">
            <div className={"ButtonDiv"}>
                <button title={"Toogle State"} className="button"
                        onClick={() => props.handler(props.data.id, "toggleState")}>
                        <span>
                            {props.data.isDone ? <MdArrowBack/> : <MdArrowForward/>}
                        </span>
                </button>
                <button title={"Edit"} className="button"
                        onClick={() => props.handler(props.data.id, "edit")}>
                        <span>
                            <MdModeEdit/>
                        </span>
                </button>
                <button title={"Delete"} className="button"
                        onClick={() => props.handler(props.data.id, "delete")}>
                        <span>
                            <MdDeleteForever/>
                        </span>
                </button>
            </div>

            <div className="Content">
                <h3 className={"Title"}>{props.data.title}</h3>

                <p className={"Description"}>{props.data.description}</p>
            </div>
        </div>
    );

}

export default TodoItem;
