import axios from 'axios'
import { ADD_ITEM, REMOVE_ITEM, FETCH_ITEMS } from './types'

const url = process.env.REACT_APP_DB_URL;

export const addItem = item => {
  return async dispatch => {
    try {
      const response = await axios.post(`${url}/items.json`, item);
      const payload = {
        id: response.data.name,
        ...item,
      }
      console.log('addItem dispatch')
      dispatch({ type: ADD_ITEM, payload })
    } catch (err) {
      throw new Error(err.message)
    }
  }
}

export const removeItem = id => {
  return async dispatch => {
    try {
      await axios.delete(`${url}/items/${id}.json`)

      dispatch({ type: REMOVE_ITEM, payload: id })
    } catch (err) {
      throw new Error(err.message)
    }
  }
}

export const fetchItems = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${url}/items.json`)
      if (response.data) {
        const payload = Object.keys(response.data).map(key => {
          return {
            id: key,
            ...response.data[key],
          }
        })

        dispatch({ type: FETCH_ITEMS, payload })
      } else {
        dispatch({ type: FETCH_ITEMS, payload: [] })
      }
    } catch (err) {
      throw new Error(err.message)
    }
  }
}