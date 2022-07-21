import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  unRead: 0,
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    reset: () => initialState,
    setNotifications: (state, { payload }) => {
      state.items = payload
      const unreadItems = payload.filter((item) => item.status === false)
      state.unRead = unreadItems.length
    },
  },
})

export const { reset, setNotifications } = notificationSlice.actions
