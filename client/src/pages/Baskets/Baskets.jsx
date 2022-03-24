import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'

import SetLocationSection from '../../components/SetLocationSection/SetLocationSection'

const Baskets = () => {
  const [shops, setShops] = useState([])
  const { isLoading, error, performFetch, cancelFetch } = useFetch('/api/shops')
  
  return (
    <div>
      <SetLocationSection />
      <h1>Baskets Page</h1>
    </div>
  )
}

export default Baskets
