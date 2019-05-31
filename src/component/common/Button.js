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
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  myClass: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  myClass: '',
};

export default Button;
