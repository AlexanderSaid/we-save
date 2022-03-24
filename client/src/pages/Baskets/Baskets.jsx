import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'

import SetLocationSection from '../../components/SetLocationSection/SetLocationSection'

const Baskets = () => {
  const [shops, setShops] = useState(null)
  const [nearestShops, setNearestShop] = useState(null)
  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('http://localhost:5000/api/shops')
      setShops(data)
    })()
  }, [])
  console.log(shops)
  return (
    <div>
      <SetLocationSection />
      <h1>Baskets Page</h1>
      {shops && shops.map((shop) => <h1 key={shop._id}>{shop.name}</h1>)}
    </div>
  )
}

export default Baskets
