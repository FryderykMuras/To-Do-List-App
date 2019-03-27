import React from 'react'

class TodoItem extends React.Component{
    render(){
        return(
            <div>
                {this.props.data.title}
                <br/>
                {this.props.data.description}
            </div>
        )
    }
}
export default TodoItem
