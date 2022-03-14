import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Joe', () => {
  render(<App />);
  const linkElement = screen.getByText(/Joe Aronson\'s Homepage/i);
  expect(linkElement).toBeInTheDocument();
});
