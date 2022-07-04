import { _axios } from './Api'

export function requireAuth(gssp) {
  return async (context) => {
    const { token } = context.req.cookies
    _axios.defaults.headers['Authorization'] = `Bearer ${token}`

    return await gssp(context)
  }
}
