import axios from 'axios'
import { INIT_CALL, ERROR_CALL, FINISH_CALL } from './actionsTypes'

export const callService = (form, success) => {
  const API = process.env.API_ROOT
  return async (dispatch) => {
    dispatch({ type: INIT_CALL })
    await axios
      .post(API, { g_serie: form })
      .then((response) => {
        if (response.data.length) {
          dispatch({
            type: FINISH_CALL,
            data: response.data[0],
          })
          return success()
        }
        return dispatch({
          type: ERROR_CALL,
          message: 'No existen registros para este número de serie',
        })
      })
      .catch((error) => {
        return console.error(error)
      })
  }
}
