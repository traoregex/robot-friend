import React, { Component } from "react";

class Card extends Component {
    render() {
        return (
            <div className="tc bg-dark-blue light-blue dib br3 grow pa3 ma2 shadow-4">
                <img className="bg-navy br4" src={`https://robohash.org/${this.props.id}?200*200`} alt="Robot" />
                <div>
                    <h2>{ this.props.name }</h2>
                    <p>{ this.props.email }</p>
                </div>
            </div>
        );
    }
}

export default Card;