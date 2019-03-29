import React from "react";

class AddNewItemForm extends React.Component{
    constructor(){
        super()
        this.state = {
            title: "",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCreate = this.handleCreate.bind(this)

    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleCreate(event){
        event.preventDefault()
        this.props.newItemHandler(this.state.title, this.state.description)
        this.props.toogleDisplayHandler()
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleCreate}>
                    <input type={"text"}
                           name={"title"}
                           placeholder={"Title"}
                           value={this.state.title}
                           onChange={this.handleChange}
                    />
                    <input type={"text"}
                           name={"description"}
                           placeholder={"Description"}
                           value={this.state.description}
                           onChange={this.handleChange}
                    />

                    <button>Create</button>
                </form>
            </div>
        )
    }
}

export default AddNewItemForm