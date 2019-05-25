import React from 'react';
import PropTypes from 'prop-types';

/**
 * Input component
 * @param {object} props
 * @returns {void}
 */
const Input = ({ placeholder, name, onChange, type, myClass, value }) => (
  <input
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className={`text-input ${myClass}`}
  />
);

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  myClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  name: 'title',
  type: 'text',
  placeholder: 'Enter task to the TO-DO list',
  myClass: '',
};

export default Input;
