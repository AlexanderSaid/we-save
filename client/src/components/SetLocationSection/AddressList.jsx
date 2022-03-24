import React from "react";
import AddressItem from "./AddressItem";
import PropTypes from "prop-types";

const AddressList = ({ addresses }) => {
  return (
    <ul>
      {addresses &&
        addresses.map((item, index) => (
          <AddressItem key={index} formatted={item.properties.formatted} />
        ))}
    </ul>
  );
};

AddressList.propTypes = {
  addresses: PropTypes.string.isRequired,
};

export default AddressList;
