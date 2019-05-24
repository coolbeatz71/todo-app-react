import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component
 * @returns {void}
 * @param {object} props
 */
const Button = ({ children, onClick, type, disabled, myClass }) => (
  <button type={type} disabled={disabled} onClick={onClick} className={`button ${myClass}`}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  myClass: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  myClass: '',
  onClick: () => {
    'button';
  },
};

export default Button;
