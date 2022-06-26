// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req

  if (method !== 'GET') res.status(404).end()
  const { token } = req.cookies
  res.status(200).send({ token } ?? {})
}
