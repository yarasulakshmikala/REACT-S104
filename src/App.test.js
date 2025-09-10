import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login form correctly', () => {
  render(<App />);

  // Check for the heading
  const headingElement = screen.getByText(/login/i);
  expect(headingElement).toBeInTheDocument();

  // Check for email input
  const emailInput = screen.getByLabelText(/email/i);
  expect(emailInput).toBeInTheDocument();

  // Check for password input
  const passwordInput = screen.getByLabelText(/password/i);
  expect(passwordInput).toBeInTheDocument();

  // Check for login button
  const loginButton = screen.getByRole('button', { name: /login/i });
  expect(loginButton).toBeInTheDocument();
});
