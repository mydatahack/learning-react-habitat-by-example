import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({
  inputFor, inputLabel, onChangeHandler, optionArray, value,
}) => (
  <div className="form-group">
    <label htmlFor={inputFor}>{inputLabel}</label>
    <select className="form-control" id={inputFor} onChange={onChangeHandler} value={value}>
      <option value="default">Select Framework</option>
      {optionArray.map((option) => <option key={option} value={option}>{option}</option>)}
    </select>
  </div>
);

SelectInput.propTypes = {
  inputFor: PropTypes.string,
  inputLabel: PropTypes.string,
  onChangeHandler: PropTypes.func,
  optionArray: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
};

SelectInput.defaultProps = {
  inputFor: '',
  inputLabel: '',
  onChangeHandler: () => {},
  optionArray: [],
  value: '',
};

export default SelectInput;
