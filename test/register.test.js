import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { getPage } from 'next-page-tester'

describe('Register page', () => {
  it('renders register page', async () => {
    const { render } = await getPage({
      route: '/register',
    })

    render()
    const nameInputEl = screen.getByPlaceholderText(/Nama Lengkap/i)
    const emailInputEl = screen.getByPlaceholderText(
      /Contoh: johndee@gmail.com/i
    )
    const passwordInputEl = screen.getByPlaceholderText(/Masukkan password/i)

    expect(nameInputEl).toBeInTheDocument()
    expect(emailInputEl).toBeInTheDocument()
    expect(passwordInputEl).toBeInTheDocument()
    expect(screen.getByTestId('btn-register')).toBeInTheDocument()
  })
})

// describe('Register page', () => {
//   it('renders register page', async () => {
//     const { render } = await getPage({
//       route: '/register',
//     })

//     render()
//     const emailInputEl = screen.getByPlaceholderText(
//       /Contoh: johndee@gmail.com/i
//     )
//     expect(emailInputEl).toBeInTheDocument()
//   })
// })

// describe('Register page', () => {
//   it('renders register page', async () => {
//     const { render } = await getPage({
//       route: '/register',
//     })

//     render()
//     const passwordInputEl = screen.getByPlaceholderText(/Masukkan password/i)
//     expect(passwordInputEl).toBeInTheDocument()
//   })
// })

// describe('Register page', () => {
//   it('renders register page', async () => {
//     const { render } = await getPage({
//       route: '/register',
//     })

//     render()
//     expect(screen.getByTestId('btn-register')).toBeInTheDocument()
//   })
// })
