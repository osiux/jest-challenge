import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const Controls = ({ onDecrease, onReset, onIncrease }) => (
    <div className="card-body ">
        <div className="btn-group btn-group-justified">
            <Button onClick={onDecrease}>-</Button>
            <Button context="danger" onClick={onReset}>
                Reset
            </Button>
            <Button onClick={onIncrease}>+</Button>
        </div>
    </div>
);

Controls.propTypes = {
    onDecrease: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onIncrease: PropTypes.func.isRequired
};

export default Controls;
