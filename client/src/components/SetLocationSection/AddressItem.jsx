import React from 'react'
import PropTypes from 'prop-types'

const AddressItem = ({ formatted, lat, lon }) => {
  return <li>{`${formatted} , lat : ${lat} , lon : ${lon}`}</li>
}

AddressItem.propTypes = {
  formatted: PropTypes.string,
  lat: PropTypes.string,
  lon: PropTypes.string,
}

export default AddressItem
