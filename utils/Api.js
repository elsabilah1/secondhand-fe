/* eslint-disable no-undef */
import axios from 'axios'

const config = {
  baseUrl: process.env.NEXT_PUBLIC_SERVER,
}

export const _axios = axios.create({
  baseURL: config.baseUrl,
  withCredentials: true,
})

_axios.interceptors.request.use(
  async function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error.response)
  }
)

_axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error.response)
  }
)

const errors = (errors) => {
  return {
    success: false,
    status: errors.status,
    error: errors,
  }
}

export const Get = async (url) => {
  try {
    const get = await _axios.get(url)
    return get
  } catch (error) {
    return errors(error)
  }
}

export const Post = async (url, params) => {
  try {
    const post = await _axios.post(url, params)
    return post
  } catch (error) {
    return errors(error)
  }
}

export const PostFormData = async (url, params) => {
  try {
    const post = await _axios.post(url, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return post
  } catch (error) {
    return errors(error)
  }
}

export const PutFormData = async (url, params) => {
  try {
    const put = await _axios.put(url, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return put
  } catch (error) {
    return errors(error)
  }
}

export const Delete = async (url) => {
  try {
    const del = await _axios.delete(url)
    return del
  } catch (error) {
    return errors(error)
  }
}
