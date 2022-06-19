import axios from 'axios'

const config = {
  baseUrl: 'https://secondhand-be-api.herokuapp.com/api/v1',
}

export const _axios = axios.create({
  baseURL: config.baseUrl,
  withCredentials: true,
})

_axios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

_axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  },
)

const header = (type) => {
  if (type === 'form-data') {
    return {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  } else {
    return {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
  }
}

const errors = (errors) => {
  return {
    success: false,
    status: errors.status,
    error: errors,
  }
}

export const Get = async (url) => {
  try {
    const head = header()
    const get = await _axios.get(url, head)
    return get
  } catch (error) {
    return errors(error)
  }
}

export const Post = async (url, params) => {
  try {
    const head = header()
    const post = await _axios.post(url, params, head)
    return post
  } catch (error) {
    return errors(error)
  }
}

export const PostFormData = async (url, params) => {
  try {
    const head = header('form-data')
    const post = await _axios.post(url, params, head)
    return post
  } catch (error) {
    return errors(error)
  }
}

export const PutFormData = async (url, params) => {
  try {
    const head = header('form-data')
    const put = await _axios.put(url, params, head)
    return put
  } catch (error) {
    return errors(error)
  }
}

export const Delete = async (url) => {
  try {
    const head = header()
    const res = await _axios.delete(url, head)
    return res
  } catch (error) {
    return errors(error.message)
  }
}
