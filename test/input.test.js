import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Input from '../components/base/InputField'

test('Render Input Field', () => {
  render(<Input />)
  const linkElement = screen.getByTestId('inputfield-test')
  expect(linkElement).toBeInTheDocument()
})
