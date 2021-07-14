import React, { Component } from 'react';
import Card from './Card';


class CardList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.robots.map((user, i) => {
                        return <Card key={i} id={this.props.robots[i].id} name={this.props.robots[i].name} email={this.props.robots[0].email} />
                    })
                }
            </div>
        );
    }
}

export default CardList;