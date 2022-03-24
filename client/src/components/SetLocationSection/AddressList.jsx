import React from "react";
import AddressItem from "./AddressItem";
import PropTypes from "prop-types";

const AddressList = ({ addresses }) => {
  return (
    <ul className="mt-10">
      {addresses &&
        addresses.map((item, index) => (
          <AddressItem
            key={index}
            formatted={item.properties.formatted}
            lat={item.properties.lat}
            lon={item.properties.lon}
          />
        ))}
    </ul>
  );
};

AddressList.propTypes = {
  addresses: PropTypes.string.isRequired,
};

export default AddressList;
