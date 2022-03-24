import React, { useState } from 'react'

import SearchBar from './SearchBar'

const SetLocationSection = () => {
  const [location, setLocation] = useState('')

  const handleLocation = (e) => {
    setLocation(e.target.value)
  }

  return (
    <div>
      <SearchBar location={location} handleLocation={handleLocation} />
    </div>
  )
}

export default SetLocationSection
