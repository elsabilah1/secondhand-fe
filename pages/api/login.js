/* eslint-disable import/no-anonymous-default-export */
import { Post } from '../../utils/Api'

export default async (req, res) => {
  const { method, body } = req

  if (method !== 'POST') {
    res.status(404).end()
  }

  try {
    const { data, headers: returnedHeaders } = await Post('/auth/login', body)

    Object.keys(returnedHeaders).forEach((key) =>
      res.setHeader(key, returnedHeaders[key]),
    )

    res.status(200).json(data)
  } catch (e) {
    const { response } = e
    const { status, data } = response
    res.status(status).json(data)
  }
}
