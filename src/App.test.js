import { render, screen } from '@testing-library/react';
import App from './App';

test('wait can you change this', () => {
  render(<App />);
  const linkElement = screen.getByText(/try stuff/i);
  expect(linkElement).toBeInTheDocument();
});
