import React, { useContext } from "react";
import AddressItem from "./AddressItem";
import PropTypes from "prop-types";
import AddressContext from "../../context/AddressContext";
const AddressList = () => {
  const { coordinates } = useContext(AddressContext);
  return coordinates ? (
    <AddressItem
      // formatted={item.properties.formatted}
      lat={coordinates.latitude}
      lon={coordinates.longitude}
    />
  ) : null;
};

AddressList.propTypes = {
  addresses: PropTypes.string,
};

export default AddressList;
