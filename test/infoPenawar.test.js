import '@testing-library/jest-dom'
import { getPage } from 'next-page-tester'

describe('Info penawar page', () => {
  it('renders info penawar page', async () => {
    const { render } = await getPage({
      route: '/info',
    })

    render()
  })
})
