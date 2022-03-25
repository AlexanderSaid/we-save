import React from "react";
import PropTypes from "prop-types";

const AddressItem = ({ formatted, lat, lon }) => {
  return <li>{`${formatted} , lat : ${lat} , lon : ${lon}`}</li>;
};

AddressItem.propTypes = {
  formatted: PropTypes.string.isRequired,
  lat: PropTypes.string.isRequired,
  lon: PropTypes.string.isRequired,
};

export default AddressItem;
