import React from "react";
import PropTypes from "prop-types";

const Map = ({ address }) => {
  const src = `https://maps.google.com/maps?width=100%&height=600&hl=en&q=${address.lat},${address.lon}&ie=UTF8&t=&z=14&iwloc=B&output=embed`;
  return (
    <section className="text-gray-600 body-font relative w-[600px] h-[400px]">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src={src}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex"></div>
    </section>
  );
};
Map.propTypes = {
  address: PropTypes.object,
};
export default Map;
