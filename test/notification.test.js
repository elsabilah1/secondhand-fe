import '@testing-library/jest-dom'
import { getPage } from 'next-page-tester'

describe('notification page', () => {
  it('renders notification page', async () => {
    const { render } = await getPage({
      route: '/notification',
    })

    render()
  })
})
