import { createSlice } from '@reduxjs/toolkit'

const notifSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    addNotif(state, action) {
      return action.payload
    },
    removeNotif() {
      return ''
    }
  }
})

export const { addNotif, removeNotif } = notifSlice.actions
export default notifSlice.reducer