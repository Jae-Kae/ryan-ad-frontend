import { useEffect, useState } from 'react'
import axios from 'axios'

const useStrapiData = (endpoint) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_STRAPI_URL}${endpoint}?populate=*`
        )
        setData(res.data.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [endpoint])

  return { data, loading, error }
}

export default useStrapiData
