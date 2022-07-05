/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

export default async (req, res) => {
  const { method, body } = req

  if (method !== 'POST') {
    res.status(404).end()
  }

  try {
    const response = await axios
      .post(`${process.env.NEXT_PUBLIC_SERVER}/auth/login`, body)
      .then((res) => res)
      .catch((error) => {
        return { error }
      })

    const { error, data, headers: returnedHeaders } = response

    if (error) return res.status(error.status).send(error.data)

    Object.keys(returnedHeaders).forEach((key) =>
      res.setHeader(key, returnedHeaders[key])
    )

    res.status(200).send(data)
  } catch (error) {
    res.send(error)
  }
}
