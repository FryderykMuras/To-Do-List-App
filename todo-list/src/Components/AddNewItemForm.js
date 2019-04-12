import React from "react";
class AddNewItemForm extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
        this.handleCancel = this.handleCancel.bind(this)

    }

    handleChange(event) {
        const {name, value} = event.target
        if(name === "description" || (name === "title" && value.toString().length<100)){
            this.setState({
                [name]: value
            })
        }

    }

    handleCreate(event) {
        event.preventDefault()
        this.props.newItemHandler(this.state.title, this.state.description)
        this.props.toogleDisplayHandler(null)
    }

    handleCancel() {
        this.props.toogleDisplayHandler(null)
    }

    render() {
        return (

                <form onSubmit={this.handleCreate} className={"ItemForm"}>
                    <input className={"FormTitle"}
                           type={"text"}
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
                    <div className={"ItemFormButtons"} >

                        <button className={"FormButton"}
                                type={"button"}
                                onClick={this.handleCancel}
                        >Cancel</button>
                        <button className={"FormButton"}>Create</button>
                    </div>
                </form>

        )
    }
}

export default AddNewItemForm