import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnClass, btnLabel, onClickHandler }) => (
  <button type="button" className={btnClass} onClick={onClickHandler}>
    {btnLabel}
  </button>
);

Button.propTypes = {
  btnClass: PropTypes.string,
  btnLabel: PropTypes.string,
  onClickHandler: PropTypes.func,
};

Button.defaultProps = {
  btnClass: '',
  btnLabel: '',
  onClickHandler: () => {},
};

export default Button;
