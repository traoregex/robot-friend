import React, { Component } from 'react';
import CardList from '../containers/CardList';
import Scroll from '../containers/Scroll';
import SearchBox from '../containers/SearchBox';


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({robots: users})
            })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }


    render() {

        const filteredRobots = this.state.robots.filter(
            robot => robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        )

        return (
            <div className="tc">
                <h1 className="title">RobotFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}

export default App;