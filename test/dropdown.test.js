import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Dropdown from '../components/base/Dropdown'
import { store } from '../store'

const MockDropdown = () => {
  return (
    <Provider store={store}>
      <Dropdown />
    </Provider>
  )
}

test('Render Button', async () => {
  render(<MockDropdown />)
  const linkElement = screen.getByTestId('dropdown-test')
  expect(linkElement).toBeInTheDocument()
})
