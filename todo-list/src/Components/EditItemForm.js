import React from "react";

class EditItemForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.itemDataGeter(props.editedItemId).title,
            description: props.itemDataGeter(props.editedItemId).description
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
        this.handleCancel = this.handleCancel.bind(this)

    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleCreate(event) {
        event.preventDefault()
        this.props.editItemHandler(this.state.title, this.state.description, this.props.editedItemId)
        this.props.toogleDisplayHandler(null)
    }

    handleCancel() {
        this.props.toogleDisplayHandler(null)
    }

    render() {
        return (

            <form onSubmit={this.handleCreate} className={"ItemForm"}>
                <input type={"text"}
                       name={"title"}
                       placeholder={"Title"}
                       value={this.state.title}
                       onChange={this.handleChange}
                />
                <textarea className={"DescriptionTextArea"}
                          name={"description"}
                          placeholder={"Description"}
                          value={this.state.description}
                          onChange={this.handleChange}
                />
                <div className={"ItemFormButtons"}>
                    <button>Edit</button>
                    <button type={"button"} onClick={this.handleCancel}>Cancel</button>
                </div>
            </form>

        )
    }
}

export default EditItemForm