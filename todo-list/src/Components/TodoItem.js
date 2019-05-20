import React from 'react'
import {MdDeleteForever, MdModeEdit, MdArrowBack, MdArrowForward, MdArrowUpward} from 'react-icons/md';
import "../Styles/TodoItem.css"
import ConfirmDelete from "./ConfirmDelete"

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDeleteConfirmation: false,
            displayDescription: false
        };

        this.displayDeleteConfirmation = this.displayDeleteConfirmation.bind(this);
        this.displayDescription = this.displayDescription.bind(this);
        this.hideDescription = this.hideDescription.bind(this);
    }

    displayDeleteConfirmation() {
        this.setState(prevState => {
            return {
                displayDeleteConfirmation: !prevState.displayDeleteConfirmation
            }
        })
    }

    displayDescription() {
        this.setState({
            displayDescription: true
        })
    }

    hideDescription(){
        this.setState({
            displayDescription: false
        })
    }


    render() {
        const description = this.state.displayDescription ? (
            <p className={"Description"}>{this.props.data.description}</p>) : null;
        const hideDescriptionButton = this.state.displayDescription ? (
            <button title={"Hide Description"} className="button"
                    onClick={(event) => {event.stopPropagation(); this.hideDescription()}}>
                        <span>
                            <MdArrowUpward/>
                        </span>
            </button>) : null;

        return (
            <div className="TodoItem"
                 onClick={this.displayDescription}
            >
                <div className={"ButtonDiv"}>
                    {hideDescriptionButton}
                    <button title={"Toogle State"} className="button"
                            onClick={(event) => {event.stopPropagation(); this.props.handler(this.props.data.id, "toggleState")}}>
                        <span>
                            {this.props.data.isDone ? <MdArrowBack/> : <MdArrowForward/>}
                        </span>
                    </button>
                    <button title={"Edit"} className="button"
                            onClick={(event) =>{event.stopPropagation(); this.props.handler(this.props.data.id, "edit")}}>
                        <span>
                            <MdModeEdit/>
                        </span>
                    </button>
                    <button title={"Delete"} className="button"
                        // onClick={() => this.props.handler(this.props.data.id, "delete")}
                            onClick={(event) => {event.stopPropagation(); this.displayDeleteConfirmation()}}
                    >
                        <span>
                            <MdDeleteForever/>
                        </span>
                    </button>
                </div>

                <div className="Content">
                    <h3 className={"Title"}>{this.props.data.title}</h3>
                    {description}

                </div>

                {this.state.displayDeleteConfirmation ? <ConfirmDelete
                    delete={() => this.props.handler(this.props.data.id, "delete")}
                    hide={this.displayDeleteConfirmation}
                /> : null}
            </div>
        );
    }

}

export default TodoItem;
