import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PostFormData } from '../../utils/Api'

export const products = createAsyncThunk(
  'product',
  async (_, thunkAPI) => {
    try {
      const response = await axios.Get('/products')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.response.data.data[0].msg,
      })
    }
  }
)

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
    builder.addCase(products.fulfilled, (state, action) => {
      state.error = false
      state.loading = false
      state.message = action.payload.message
    })
    builder.addCase(products.pending, (state) => {
      state.loading = true
    })
    builder.addCase(products.rejected, (state, action) => {
      state.loading = false
      state.message = action.payload.error
      state.error = true
    })

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
