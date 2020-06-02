import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  inputFor, inputLabel, onChangeHandler, value,
}) => (
  <div className="form-group">
    <label htmlFor={inputFor}>{inputLabel}</label>
    <input
      type="text"
      className="form-control"
      id={inputFor}
      onChange={onChangeHandler}
      value={value}
    />
  </div>
);

TextInput.propTypes = {
  inputFor: PropTypes.string,
  inputLabel: PropTypes.string,
  onChangeHandler: PropTypes.func,
  value: PropTypes.string,
};

TextInput.defaultProps = {
  inputFor: 'default',
  inputLabel: 'Text Input',
  onChangeHandler: () => {},
  value: '',
};

export default TextInput;
