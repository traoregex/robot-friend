import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: 'solid 1px #e0e0e0', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;