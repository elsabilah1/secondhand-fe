import axios from 'axios'

const config = {
  baseUrl: process.env.NEXT_PUBLIC_SERVER,
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

const header = (type, token) => {
  if (type === 'form-data') {
    return {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    }
  } else {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
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

export const Get = async (url, token) => {
  try {
    const head = header('', token)
    const get = await _axios.get(url, head)
    return get
  } catch (error) {
    return errors(error)
  }
}

export const Post = async (url, params, token) => {
  try {
    const head = header('', token)
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