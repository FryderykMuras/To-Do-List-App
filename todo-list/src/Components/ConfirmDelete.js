import React from 'react';
import "../Styles/ConfirmDelete.css"

function ConfirmDelete(props) {
    return (
        <div className={"BackgroundDiv"}>
            <div className={"DeletePopUp"}>
                <p>Are you sure you want to delete this element?</p>
                <div id={"DeleteButtonDiv"}>
                        <button className={"FormButton"} onClick={props.hide}>Cancel</button>
                        <button className={"FormButton"} onClick={() => {
                            props.delete();
                            props.hide();
                        }}>Delete
                        </button>

                </div>
            </div>
        </div>
    )

}

export default ConfirmDelete;