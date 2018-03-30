import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ counter }) => (
    <div className="card-body">
        <p className="counter" style={{ fontSize: '500%' }}>
            {counter}
        </p>
    </div>
);

Counter.propTypes = {
    counter: PropTypes.number.isRequired
};

export default Counter;
