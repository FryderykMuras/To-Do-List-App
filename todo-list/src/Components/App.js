import React, {Component} from 'react'
import Cookies from 'js-cookie'
import '../Styles/App.css'
import TodoList from "./TodoList"
import Header from "./Header"


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            currentID: 0
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.addNewItem = this.addNewItem.bind(this)
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
        }

    }

    addNewItem(title, description) {
        let newData = this.state.data
        const id = this.state.currentID
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
    }


    render() {

        return (
            <div className="App">
                <Header/>
                <TodoList data={this.state.data} handler={this.handleChange} newItemHandler={this.addNewItem}/>

            </div>
        )
    }
}

export default App;
