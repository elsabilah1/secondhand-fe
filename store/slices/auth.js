import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { Get } from '../../utils/Api'
import axios from 'axios'

export const fetchUser = createAsyncThunk('auth/user', async () => {
  const response = await Get('/user/profile')
  return response.data
})

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('api/login', credentials)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  },
)

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('api/logout')
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message })
  }
})

const initialState = {
  loading: false,
  error: null,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false
    })
    builder.addCase(login.pending, (state) => {
      state.loading = true
    })
    builder.addCase(login.rejected, (_, action) => {
      state = { ...initialState, error: action.error }
      throw new Error(action.error.message)
    })

    builder.addCase(logout.pending, (state) => {
      state.loading = true
    })
    builder.addCase(logout.fulfilled, () => initialState)

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload
    })
  },
})

export const { reset } = authSlice.actions
