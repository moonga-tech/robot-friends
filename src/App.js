import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import Search from './Search'

class App extends Component {
    constructor() {
        super();
        this.state = {
            "rob": robots,
            "inputField": "",
        }
    }

    onSearchChange = (event) => {
        this.setState({ inputField: event.target.value })
    }

    render() {
        const disRob = this.state.rob.filter(robArr => {
            return robArr.name.toLowerCase().includes(this.state.inputField.toLowerCase());
        })

        return (
            <div className="tc">
                <h1>Robo Friends</h1>
                <Search searchChange={this.onSearchChange}/>
                <CardList robots={ disRob }/>
            </div>
        )
    }
}

export default App;