import { createContext, useReducer, useContext } from 'react'
import API from '../api/axiosInstance'

const StrapiContext = createContext()

const initialState = { data: {}, loading: false, error: null }

const strapiReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true, error: null }
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        data: { ...state.data, [action.key]: action.payload },
      }
    case 'ERROR':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export const StrapiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(strapiReducer, initialState)

  const fetchData = async (key, endpoint) => {
    dispatch({ type: 'LOADING' })
    try {
      const res = await API.get(`${endpoint}?populate=*`)
      dispatch({ type: 'SUCCESS', key, payload: res.data.data })
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error.message })
    }
  }

  return (
    <StrapiContext.Provider value={{ state, fetchData }}>
      {children}
    </StrapiContext.Provider>
  )
}

export const useStrapi = () => useContext(StrapiContext)
