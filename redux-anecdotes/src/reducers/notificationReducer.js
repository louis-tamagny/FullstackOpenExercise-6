import { createSlice } from '@reduxjs/toolkit'

const notifSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    updateNotification(state, action) {
      return action.payload
    },
    clearNotification() {
      return ''
    }
  }
})

export const { updateNotification, clearNotification } = notifSlice.actions

export const setNotification = (content, time) => {
  return async dispatch => {
    dispatch(updateNotification(content))
    setTimeout(() => dispatch(clearNotification()), time*1000)
  }
}

export default notifSlice.reducer