import React, { Component } from 'react'

const MyContext = React.createContext()
export default MyContext

class MyProvider extends Component {
    state = {
        person: {
            name: "Nancy",
            age: 62,
        }
    }

    toggleName = () => { 
        this.setState({
            person: {...this.state.person, name: this.state.person.name === "Nancy" ? "Bob" : "Nancy"}
        })
    }

    getOlder = () => {
        this.setState({
            person: {...this.state.person, age: this.state.person.age + 1}
        })
    }


    render() {
        return <MyContext.Provider value ={{
                state: this.state,
                toggleName: this.toggleName,
                getOlder: this.getOlder
            }}>{this.props.children}</MyContext.Provider>
        }
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer}
