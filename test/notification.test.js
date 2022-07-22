import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { getPage } from 'next-page-tester'

describe('notification page', () => {
  it('renders notification page', async () => {
    const { render } = await getPage({
      route: '/notification',
    })

    render()
    const Notifikasi = screen.getByTestId('Notifikasi-test')
    expect(Notifikasi).toBeInTheDocument()

    // const image = screen.getByTestId('image-notif')
    // expect(image).toBeInTheDocument()

    // const pageTitle = screen.getByTitle('Notifikasi')
    // const headerTitle = screen.getByTitle('Notifikasi')

    // expect(pageTitle).toBeInTheDocument()
    // expect(headerTitle).toBeInTheDocument()
  })
})
