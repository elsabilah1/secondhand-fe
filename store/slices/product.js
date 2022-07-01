import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PostFormData } from '../../utils/Api'

export const createNewProduct = createAsyncThunk(
  'product/create',
  async (data, thunkApi) => {
    const { data: resData, error } = await PostFormData('/user/products', data)

    if (error) {
      const message = error.data.message
        ? error.data.message
        : error.data.data[0].msg
      return thunkApi.rejectWithValue({
        error: message,
      })
    }

    return resData
  }
)

const initialState = {
  loading: false,
  message: '',
  error: false,
  itemList: [],
  item: {},
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(createNewProduct.fulfilled, (state, action) => {
      state.loading = false
      ;(state.error = false), (state.message = action.payload.message)
    })
    builder.addCase(createNewProduct.pending, (state) => {
      state.loading = true
    })
    builder.addCase(createNewProduct.rejected, (state, action) => {
      state.loading = false
      state.error = true
      state.message = action.payload.error
    })
  },
})

export const { reset } = productSlice.actions
