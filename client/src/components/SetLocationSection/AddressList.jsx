import React from "react";
import AddressItem from "./AddressItem";

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

export default AddressList;
