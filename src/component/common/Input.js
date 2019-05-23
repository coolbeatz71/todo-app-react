import React from 'react';
import PropTypes from 'prop-types';

/**
 * button component
 * @param {object} props
 */
const Input = ({ placeholder, name, onChange, type, myClass }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    className={`text-input ${myClass}`}
  />
);

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  myClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  name: '',
  type: 'text',
  placeholder: 'Enter task to do',
  myClass: '',
};

export default Input;
