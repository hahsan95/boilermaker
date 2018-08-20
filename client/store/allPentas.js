import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_PENTAS = 'GET_ALL_PENTAS'

/**
 * INITIAL STATE
 */
const pentas = {
  pentasList: []
}

/**
 * ACTION CREATORS
 */
const getPentasList = pentasList => {
  return {
    type: GET_ALL_PENTAS,
    pentasList
  }
}

/**
 * THUNK CREATORS
 */
export const getPentasListThunk = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/messages')
    const penta = res.data
    dispatch(getPentasList(penta))
  }
}

/**
 * REDUCER
 */
export default function (state = pentas, action) {
  switch (action.type) {
    case GET_ALL_PENTAS:
      return { ...state, pentasList: action.pentasList }
    default:
      return state
  }
}
