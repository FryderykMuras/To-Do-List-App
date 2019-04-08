import React, {Component} from 'react'
import Cookies from 'js-cookie'
import '../Styles/App.css'
import TodoList from "./TodoList"
import Header from "./Header"
import Forms from "./Forms";


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            currentID: 0,
            isAddingNewItem: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.addNewItem = this.addNewItem.bind(this)
        this.handleAddingNewItem = this.handleAddingNewItem.bind(this)
        this.editItem = this.editItem.bind(this)
        this.getItemData = this.getItemData.bind(this)
    }

    componentDidMount() {
        const stateFromCookies = Cookies.get('state')
        if (stateFromCookies) {
            this.setState(JSON.parse(stateFromCookies))
        }
    }

    componentDidUpdate() {
        Cookies.set('state', JSON.stringify(this.state), {expires: 365})
    }

    handleChange(id, operation) {
        console.log(operation, id)
        if (operation === "toggleState") {
            this.setState(prevState => {
                const newData = prevState.data.map(function (item) {
                    if (item.id === id) {
                        const newItem = item
                        newItem.isDone = !newItem.isDone
                        return newItem
                    } else {
                        return item
                    }
                })
                return newData
            })
        } else if (operation === "delete") {

            this.setState(prevState => {
                const newData = prevState.data.filter(function (item) {
                    return item.id !== id
                })
                return {
                    data: newData
                }
            })
        } else if (operation === "edit") {
            this.setState({editedId: id})
            this.handleAddingNewItem("edit")
            console.log(this.getItemData(id))
        }

    }

    addNewItem(title, description) {
        let newData = this.state.data
        const id = this.state.currentID
        console.log("created",id)
        newData.push({
                id: id,
                title: title,
                description: description,
                isDone: false
            }
        )
        this.setState(
            {
                data: newData,
                currentID: id + 1
            })
        console.log(this.state)
    }

    editItem(title, description, id) {
        this.setState(prevState => {
            return {
                data: prevState.data.map(item => {
                    if (item.id === id) {
                        let editedItem = item
                        editedItem.title = title
                        editedItem.description = description
                        return editedItem
                    } else {
                        return item
                    }
                })
            }
        })
    }

    getItemData(id) {
        return this.state.data.filter(item => item.id === id)[0]
    }

    handleAddingNewItem(status) {
        this.setState(prevState => {
            return {
                isAddingNewItem: prevState.isAddingNewItem === null ? status : null
            }
        })
    }


    render() {

        return (
            <div className="App">

                <Forms status={this.state.isAddingNewItem}
                       editedId={this.state.editedId}
                       newItemHandler={this.addNewItem}
                       editItemHandler={this.editItem}
                       handleAddingNewItem={this.handleAddingNewItem}
                       itemDataGeter={this.getItemData}
                />
                <Header/>
                <TodoList data={this.state.data}
                          handler={this.handleChange}
                          handleAddingNewItem={this.handleAddingNewItem}
                />

            </div>
        )
    }
}

export default App;
