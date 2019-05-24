import PropTypes from 'prop-types';
import React from 'react';

/**
 * Checkbox component
 * @returns {void}
 * @param {object} props
 */
const Checkbox = ({ checked, name, onChange, labelClass, spanClass }) => {
  return (
    <label htmlFor="completed" className={labelClass}>
      <input type="checkbox" name={name} onChange={onChange} checked={checked} />
      <span className={spanClass} />
    </label>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  labelClass: PropTypes.string,
  spanClass: PropTypes.string,
};

Checkbox.defaultProps = {
  checked: false,
  name: 'completed',
  labelClass: 'switch',
  spanClass: 'slider round',
  onChange: () => {
    'button';
  },
};

export default Checkbox;
