import { render, screen } from '@testing-library/react'
import App from './App'

test('renders welcome link', () => {
  render(<App />)
  const linkElement = screen.getByText(
    /Hello! Welcome to Ganesh BSSR's Repositories/i
  )
  expect(linkElement).toBeInTheDocument()
})
