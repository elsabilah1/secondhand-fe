/* eslint-disable import/no-anonymous-default-export */

export default async (req, res) => {
  const { method, cookies } = req

  if (method !== 'GET') {
    res.status(404).end()
  }

  res.send({ token: cookies.token })
}
