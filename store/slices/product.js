import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Get, PostFormData } from '../../utils/Api'

export const getAllProduct = createAsyncThunk(
  'products',
  async (_, thunkAPI) => {
    try {
      const response = await Get('/products')
      return response.data || null
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.response.data.data[0].msg,
      })
    }
  }
)

export const getProductById = createAsyncThunk(
  'product/id',
  async (id, thunkAPI) => {
    try {
      const response = await Get(`/user/products/${id}`)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.response.data.data[0].msg,
      })
    }
  }
)

export const getUserProduct = createAsyncThunk(
  'product/user',
  async (_, thunkAPI) => {
    try {
      const response = await Get('/user/products')
      return response.data || null
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
      const message = error.data.data
        ? error.data.data[0].msg
        : error.data.message

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
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.error = false
      state.loading = false
      state.itemList = action.payload
    })
    builder.addCase(getAllProduct.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getAllProduct.rejected, (state, action) => {
      state.loading = false
      state.message = action.payload.error
      state.error = true
    })

    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.error = false
      state.loading = false
      state.message = action.payload.message
      state.item = action.payload.data
    })
    builder.addCase(getProductById.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getProductById.rejected, (state, action) => {
      state.loading = false
      state.message = action.payload.error
      state.error = true
    })

    builder.addCase(getUserProduct.fulfilled, (state, action) => {
      state.error = false
      state.loading = false
      state.itemList = action.payload
    })
    builder.addCase(getUserProduct.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getUserProduct.rejected, (state, action) => {
      state.loading = false
      state.message = action.payload.error
      state.error = true
    })

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

export const { reset } = productSlice.actions
