import React from 'react';

const Scroll = (props) => {
    return (
        <div style={
            {
                overflowY: 'scroll',
                // borderTop: 'solid 10px #2B2B2D',
                // borderLeft: 'solid 10px #2B2B2D',
                // borderBottom: 'solid 10px #2B2B2D',
                width: '90vw',
                margin: 'auto',
                height: '60vh',
                padding: '20px',
            }
        }>
            {props.children}
        </div>
    );
};

export default Scroll;