import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Button from '../components/base/Button'

test('Render Button', () => {
  render(<Button />)
  const linkElement = screen.getByTestId('button-test')
  expect(linkElement).toBeInTheDocument()
})
