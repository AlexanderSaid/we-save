import React from "react";
import PropTypes from "prop-types";

const AddressItem = ({ formatted }) => {
  return <li>{formatted}</li>;
};

AddressItem.propTypes = {
  formatted: PropTypes.string.isRequired,
};

export default AddressItem;
