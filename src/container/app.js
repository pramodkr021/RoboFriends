import React, { Component } from "react";
import Searchbox from "../component/searchbox";
import Cardlist from "../component/cardlist";
import Scroll from "../component/scroll";
import './app.css'

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots : [],
            searchfield : ""
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => this.setState({robots:user}))
    }

    onSearchChange = (event => {
        this.setState({searchfield:event.target.value})
    })

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(filterRobot => {
            return filterRobot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return (!robots.length) ? <h1 className="tc">Loading</h1>: (<div>
            <h1 className="fw9">RoboFriends</h1>
            <Searchbox searchChange = {this.onSearchChange}/>
            <Scroll>
                <Cardlist robot ={filteredRobots}/>
            </Scroll>
        </div>)
        }
    }

export default App;