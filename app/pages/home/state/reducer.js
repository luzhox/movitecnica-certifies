import { INIT_CALL, FINISH_CALL, ERROR_CALL } from './actionsTypes'

const initialState = { isLoading: false, message: '' }

export const home = (state = initialState, action) => {
  switch (action.type) {
    case INIT_CALL:
      return { isLoading: true }
    case FINISH_CALL:
      return { isLoading: false, data: action.data }
    case ERROR_CALL:
      return { isLoading: false, message: action.message }
    default:
      return state
  }
}
export default home
