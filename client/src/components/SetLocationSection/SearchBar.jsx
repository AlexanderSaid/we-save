import React from 'react'
import { BiCurrentLocation } from 'react-icons/bi'
import useFetchAPI from '../../hooks/useFetchAPI'
import { Link } from 'react-router-dom'
// import { getDistance } from "geolib";
import AddressList from './AddressList'
import PropTypes from 'prop-types'

const SearchBar = ({ location, handleLocation }) => {
  let addresses
  if (location) {
    let url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&apiKey=8df64a19e0e54e67ac4cd1f80cff96a0`
    const { data } = useFetchAPI(url)
    addresses = data.features
  }
  return (
    <>
      <h3 className='mt-2 mb-4 text-3xl font-bold text-white md:text-xl'>
        {' '}
        Find Shops Near You
      </h3>
      <div className='flex rounded bg-white w-[30rem]'>
        <BiCurrentLocation />
        <input
          type='text'
          name='location'
          className='w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none'
          placeholder='Enter Your Post Code'
          onChange={(e) => handleLocation(e)}
        />
        <Link to='/baskets'>
          <button
            className={`m-2 rounded px-4 px-4 py-2 font-semibold text-black-400 ${
              location.length > 0
                ? 'bg-primary'
                : 'bg-gray-500 cursor-not-allowed'
            }`}>
            {' '}
            Search
          </button>
        </Link>
      </div>
      <AddressList addresses={addresses} />
    </>
  )
}

SearchBar.propTypes = {
  location: PropTypes.string,
  handleLocation: PropTypes.func,
}

export default SearchBar
