import React from "react";

class EditItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.itemDataGeter(props.editedItemId).title,
            description: props.itemDataGeter(props.editedItemId).description
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.displayWarning = this.displayWarning.bind(this);
    }

    displayWarning(){
        this.setState({displayWarning: true})
    }

    handleChange(event) {
        const {name, value} = event.target;
        if(name === "description" || (name === "title" && value.toString().length<100)){
            this.setState({
                [name]: value
            });
        }

    }

    handleCreate(event) {
        event.preventDefault();
        if(this.state.title.length < 5){
            this.displayWarning();
            return;
        }
        this.props.editItemHandler(this.state.title, this.state.description, this.props.editedItemId);
        this.props.toogleDisplayHandler(null);
    }

    handleCancel() {
        this.props.toogleDisplayHandler(null);
    }

    render() {
        return (

            <form onSubmit={this.handleCreate}
                  className={"ItemForm"}
                  onKeyDown={event => event.which === 27 ? this.handleCancel() : null}
            >
                <input className={"FormTitle"}
                       type={"text"}
                       name={"title"}
                       placeholder={"Title"}
                       value={this.state.title}
                       autoFocus={true}
                       onChange={this.handleChange}
                />
                <textarea className={"DescriptionTextArea"}
                          name={"description"}
                          placeholder={"Description"}
                          value={this.state.description}
                          onChange={this.handleChange}
                />

                {this.state.displayWarning ? (<div className={"Warning"} >
                    Title must be at least 5 characters long
                </div>) : null}

                <div className={"ItemFormButtons"}>

                    <button className={"FormButton"} type={"button"} onClick={this.handleCancel}>Cancel</button>
                    <button className={"FormButton"}>Edit</button>
                </div>
            </form>

        );
    }
}

export default EditItemForm;