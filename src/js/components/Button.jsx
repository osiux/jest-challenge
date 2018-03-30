import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, context, children }) => (
    <button className={`btn btn-${context}`} onClick={onClick}>
        {children}
    </button>
);

Button.defaultProps = {
    context: 'primary'
};

Button.propTypes = {
    onClick: PropTypes.func,
    context: PropTypes.string,
    children: PropTypes.node
};

export default Button;
