import '@testing-library/jest-dom'
import { getPage } from 'next-page-tester'

describe('home page', () => {
  it('renders home page', async () => {
    const { render } = await getPage({
      route: '/',
    })

    render()
    expect(screen.getByTestId('carousel-home')).toBeInTheDocument()
  })
})
