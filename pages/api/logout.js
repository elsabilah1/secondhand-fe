/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

export default async (req, res) => {
  const { method } = req

  if (method !== 'POST') {
    res.status(404).end()
  }

  try {
    const { token } = req.cookies

    const { data, headers: returnedHeaders } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER}/auth/logout`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    Object.keys(returnedHeaders).forEach((key) =>
      res.setHeader(key, returnedHeaders[key])
    )

    res.status(200).json(data)
  } catch (e) {
    console.log(e)
    res.send(e)
  }
}
