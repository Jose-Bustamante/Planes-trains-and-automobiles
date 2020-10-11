import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import { ReactComponent as ErrorIcon } from "../../assets/404.svg";
import { ErrorIconAndMessageWrapper } from "./styles";

const ErrorIconAndMessage = ({ message }) => (
  <ErrorIconAndMessageWrapper>
    <Icon as={ErrorIcon} height="200px" width="200px" />
    <span>{message}</span>
  </ErrorIconAndMessageWrapper>
);

ErrorIconAndMessage.propTypes = {
  message: PropTypes.string,
};

ErrorIconAndMessage.defaultProps = {
  message: "",
};

export default ErrorIconAndMessage;
