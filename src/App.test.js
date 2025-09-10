import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Login Form Tests', () => {
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

  test('allows typing in email and password fields', () => {
    render(<App />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'mypassword' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('mypassword');
  });

  test('toggles password visibility', () => {
    render(<App />);
    const passwordInput = screen.getByLabelText(/password/i);
    const toggleBtn = screen.getByRole('button', { name: /show/i });

    // Initially password type is "password"
    expect(passwordInput.type).toBe('password');

    // Click toggle button -> should become text
    fireEvent.click(toggleBtn);
    expect(passwordInput.type).toBe('text');

    // Click toggle button again -> should revert to password
    fireEvent.click(toggleBtn);
    expect(passwordInput.type).toBe('password');
  });
});




