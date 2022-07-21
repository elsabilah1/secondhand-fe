/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

export default async (req, res) => {
  const { method, body } = req

  if (method !== 'POST') {
    res.status(404).end()
  }

  const response = await axios
    .post(`${process.env.NEXT_PUBLIC_SERVER}/auth/login`, body)
    .then((res) => res)
    .catch((error) => {
      return { error }
    })

  const error = response?.error?.response

  if (error) {
    return res.status(error.status).send(error.data)
  }

  const { data, headers: returnedHeaders } = response

  Object.keys(returnedHeaders).forEach((key) =>
    res.setHeader(key, returnedHeaders[key])
  )

  return res.status(200).send(data)
}
