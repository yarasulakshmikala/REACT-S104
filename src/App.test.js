import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders login form correctly', () => {
  render(<App />);

  // Check for the heading
  const headingElement = screen.getByRole('heading', { name: /login/i });
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

  // Check for Sign up link
  const signUpLink = screen.getByText(/sign up/i);
  expect(signUpLink).toBeInTheDocument();
});

test('shows error message when trying to login with empty fields', () => {
  render(<App />);

  // Click the login button without entering email/password
  const loginButton = screen.getByRole('button', { name: /login/i });
  fireEvent.click(loginButton);

  // Error message should appear
  const errorMessage = screen.getByText(/please enter both email and password/i);
  expect(errorMessage).toBeInTheDocument();
});



