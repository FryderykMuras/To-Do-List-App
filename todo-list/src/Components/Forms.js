import React from "react"
import AddNewItemForm from "./AddNewItemForm";
import "../Styles/Forms.css"
import EditItemForm from "./EditItemForm";

class Forms extends React.Component {
    render() {
        let form;
        if (this.props.status === "edit") {
            console.log(this.props.editedId)
            form = <div className={"Form"} onClick={(event)=>event.stopPropagation()}>
                <EditItemForm editedItemId={this.props.editedId}
                              editItemHandler={this.props.editItemHandler}
                              toogleDisplayHandler={this.props.handleAddingNewItem}
                              itemDataGeter={this.props.itemDataGeter}
                />
            </div>

        } else if (this.props.status === "new") {
            form = <div className={"Form"} onClick={(event)=>event.stopPropagation()}>
                <AddNewItemForm newItemHandler={this.props.newItemHandler}
                                toogleDisplayHandler={this.props.handleAddingNewItem}
                />
            </div>

        } else {
            form = null
        }
        if (form){
            return (
                <div className={"BackgroundDiv"}
                     tabIndex={"0"}
                     onClick={()=>this.props.handleAddingNewItem(null)}

                >
                    {form}
                </div>
            )
        }else{
            return null
        }

    }
}

export default Forms