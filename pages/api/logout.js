/* eslint-disable import/no-anonymous-default-export */
import { _axios } from '../../utils/Api'

export default async (req, res) => {
  const { method } = req

  if (method !== 'POST') {
    res.status(404).end()
  }

  try {
    const { token } = req.cookies

    const { data, headers: returnedHeaders } = await _axios.post(
      '/auth/logout',
      undefined,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    Object.keys(returnedHeaders).forEach((key) =>
      res.setHeader(key, returnedHeaders[key]),
    )

    res.status(200).json(data)
  } catch (e) {
    console.log(e)
    res.send(e)
  }
}
