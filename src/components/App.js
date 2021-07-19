import React, { useState, useEffect } from 'react';
import CardList from '../containers/CardList';
import Scroll from '../containers/Scroll';
import SearchBox from '../containers/SearchBox';
import ErrorBoundary from '../containers/ErrorBoundary';


const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter(
        robot => robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setRobots(users);
            })
        console.log(count);
    }, [count]);
    

    return (
        <div className="tc main-wrapper">
            <div className="top-section">
                <h1 className="title">RobotFriends</h1>
                <button onClick={()=> setCount(count+1)}>Click here</button>
                <SearchBox searchChange={onSearchChange} />
            </div>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}


// class App extends Component {

//     constructor() {
//         super();
//         this.state = {
//             robots: [],
//             searchfield: ''
//         }
//     }

//     componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => {
        //         this.setState({robots: users})
        //     })
//     }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value });
    // }


//     render() {

        // const filteredRobots = this.state.robots.filter(
        //     robot => robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        // )

        // return (
        //     <div className="tc main-wrapper">
        //         <div className="top-section">
        //             <h1 className="title">RobotFriends</h1>
        //             <SearchBox searchChange={this.onSearchChange} />
        //         </div>
        //         <Scroll>
        //             <ErrorBoundary>
        //                 <CardList robots={filteredRobots} />
        //             </ErrorBoundary>
        //         </Scroll>
        //     </div>
        // );
//     }
// }

export default App;