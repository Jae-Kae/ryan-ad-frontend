import { useEffect, useState } from 'react'
import API from '../api/axiosInstance'

const useFetch = (endpoint) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get(`${endpoint}?populate=*`)
        setData(res.data.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [endpoint])

  return { data, loading, error }
}

export default useFetch
