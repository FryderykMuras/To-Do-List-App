import React from "react"
import AddNewItemForm from "./AddNewItemForm";
import "../Styles/Forms.css"
import EditItemForm from "./EditItemForm";

function Forms(props) {
        let form;
        if (props.status === "edit") {
            console.log(props.editedId);
            form = <div className={"Form"} onClick={(event)=>event.stopPropagation()}>
                <EditItemForm editedItemId={props.editedId}
                              editItemHandler={props.editItemHandler}
                              toogleDisplayHandler={props.handleAddingNewItem}
                              itemDataGeter={props.itemDataGeter}
                />
            </div>;

        } else if (props.status === "new") {
            form = <div className={"Form"} onClick={(event)=>event.stopPropagation()}>
                <AddNewItemForm newItemHandler={props.newItemHandler}
                                toogleDisplayHandler={props.handleAddingNewItem}
                />
            </div>;

        } else {
            form = null;
        }
        if (form){
            return (
                <div className={"BackgroundDiv"}
                     tabIndex={"0"}
                     onClick={()=>props.handleAddingNewItem(null)}
                >
                    {form}
                </div>
            );
        }else{
            return form;
        }


}

export default Forms;