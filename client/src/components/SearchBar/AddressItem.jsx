import React from "react";
import PropTypes from "prop-types";

const AddressItem = ({ lat, lon }) => {
  return <h3>{` lat : ${lat} , lon : ${lon}`}</h3>;
};

AddressItem.propTypes = {
  lat: PropTypes.string.isRequired,
  lon: PropTypes.string.isRequired,
};

export default AddressItem;
