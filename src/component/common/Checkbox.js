import PropTypes from 'prop-types';
import React from 'react';

/**
 * Checkbox component
 * @returns {void}
 * @param {object} props
 */
const Checkbox = props => {
  const { checked, name, markComplete, labelClass, spanClass } = props;
  return (
    <label htmlFor="complete" onClick={markComplete} className={labelClass}>
      <input type="checkbox" name={name} checked={checked} />
      <span className={spanClass} />
    </label>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string,
  markComplete: PropTypes.func.isRequired,
  labelClass: PropTypes.string,
  spanClass: PropTypes.string,
};

Checkbox.defaultProps = {
  name: 'complete',
  labelClass: 'switch',
  spanClass: 'slider round',
};

export default Checkbox;
