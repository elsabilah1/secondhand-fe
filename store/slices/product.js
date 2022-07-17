import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PostFormData } from '../../utils/Api'

export const createNewProduct = createAsyncThunk(
  'product/create',
  async (data, thunkApi) => {
    const response = await PostFormData('/user/products', data)

    if (response.error) {
      const message = response.error.data.data
        ? response.error.data.data[0].msg
        : response.error.data.message

      return thunkApi.rejectWithValue({
        error: message,
      })
    }
    return response
  }
)

const initialState = {
  loading: false,
  message: '',
  error: false,
  keyword: '',
  category: '',
  sortBy: '',
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: () => initialState,
    setCategory: (state, { payload }) => {
      state.category = payload
    },
    setKeyword: (state, { payload }) => {
      state.keyword = payload
    },
    setSortBy: (state, { payload }) => {
      state.sortBy = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewProduct.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      state.message = action.payload.message
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

export const { reset, setCategory, setKeyword, setSortBy } =
  productSlice.actions
