import React from 'react';

const SearchBox = () => {
    return (
        <div className="pa2">
            <input type="search"
                placeholder="Search robots"
                className="pa3 ba b--navy bg-lightest-blue"
            />
        </div>
    );
}

export default SearchBox;