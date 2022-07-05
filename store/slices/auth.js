import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Get, Post } from '../../utils/Api'

export const fetchUser = createAsyncThunk('auth/user', async (_, thunkAPI) => {
  const { data, error } = await Get('/user/profile')

  if (error) {
    return thunkAPI.rejectWithValue({
      error: error.data.message,
    })
  }

  return data
})

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('api/login', credentials)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.response.data.data[0].msg,
      })
    }
  }
)

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    const { data, error } = await Post('/auth/register', credentials)

    if (error) {
      return thunkAPI.rejectWithValue({
        error: error.data.data[0].msg,
      })
    }

    return data
  }
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
  message: '',
  error: false,
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
      state.error = false
      state.loading = false
      state.message = action.payload.message
    })
    builder.addCase(login.pending, (state) => {
      state.loading = true
    })
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false
      state.message = action.payload.error
      state.error = true
    })

    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false
      state.message = action.payload.message
    })
    builder.addCase(register.pending, (state) => {
      state.loading = true
    })
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false
      state.error = true
      state.message = action.payload.error
    })

    builder.addCase(logout.pending, (state) => {
      state.loading = true
    })
    builder.addCase(logout.fulfilled, () => initialState)

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload.data
    })
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchUser.rejected, (state) => {
      state.loading = false
      state.error = true
      // state.message = action.payload.error
    })
  },
})

export const { reset } = authSlice.actions
