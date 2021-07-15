import React from "react";

const Card = (robot) => {
    return (
            <div className="tc bg-dark-blue light-blue dib br3 grow pa3 ma2 shadow-4">
                <img className="bg-navy br4" src={`https://robohash.org/${robot.id}?200*200`} alt="Robot" />
                <div>
                    <h2>{ robot.name }</h2>
                    <p>{ robot.email }</p>
                </div>
            </div>
        );
}

export default Card;