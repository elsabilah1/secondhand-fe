import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { getPage } from 'next-page-tester'

describe('Login page', () => {
  it('renders login page', async () => {
    const { render } = await getPage({
      route: '/login',
    })

    render()
    const emailInputEl = screen.getByPlaceholderText(
      /Contoh: johndee@gmail.com/i
    )
    const passwordInputEl = screen.getByPlaceholderText(/Masukkan password/i)

    expect(emailInputEl).toBeInTheDocument()
    expect(passwordInputEl).toBeInTheDocument()
    expect(screen.getByTestId('btn-login')).toBeInTheDocument()
  })
})

// describe('Login page', () => {
//   it('renders login page', async () => {
//     const { render } = await getPage({
//       route: '/login',
//     })

//     render()
//     const passwordInputEl = screen.getByPlaceholderText(/Masukkan Password/i)
//     expect(passwordInputEl).toBeInTheDocument()
//   })
// })

// describe('Login page', () => {
//   it('renders login page', async () => {
//     const { render } = await getPage({
//       route: '/login',
//     })

//     render()
//     expect(screen.getByTestId('btn-login')).toBeInTheDocument()
//   })
// })
