import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, disabled }) => (
  <button disabled={disabled}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.boolean
};

export default Button;
