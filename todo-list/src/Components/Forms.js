import React from "react"
import AddNewItemForm from "./AddNewItemForm";
import "../Styles/Forms.css"
import EditItemForm from "./EditItemForm";

class Forms extends React.Component {
    render() {
        let form;
        if (this.props.status === "edit") {
            console.log(this.props.editedId)
            form = <div className={"BackgroundDiv"}>
                <div className={"Form"}>
                    <EditItemForm editedItemId={this.props.editedId}
                                  editItemHandler={this.props.editItemHandler}
                                  toogleDisplayHandler={this.props.handleAddingNewItem}
                                  itemDataGeter={this.props.itemDataGeter}
                    />
                </div>
            </div>
        } else if (this.props.status === "new") {
            form = <div className={"BackgroundDiv"}>
                <div className={"Form"}>
                    <AddNewItemForm newItemHandler={this.props.newItemHandler}
                                    toogleDisplayHandler={this.props.handleAddingNewItem}
                    />
                </div>
            </div>
        } else {
            form = null
        }

        return (
            form
        )
    }
}

export default Forms