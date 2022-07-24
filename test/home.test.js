import '@testing-library/jest-dom'
import { getPage } from 'next-page-tester'

describe('Login page', () => {
  it('renders login page', async () => {
    const { render } = await getPage({
      route: '/',
    })

    render()
    // expect(screen.getByTestId('btn-login')).toBeInTheDocument()
  })
})
