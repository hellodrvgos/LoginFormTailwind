import { useState } from 'react';

// Props for LoginForm
type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
};

// LoginForm component
export default function LoginForm1({onSubmit}: LoginFormProps) {

    // State hooks
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<boolean>(false);
  
    // Event handler email input
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };
  
    // Event handler password inout
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };
  
    // Event handler form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      // Email validation
      if (!email.trim() || !isValidEmail(email)) {
        setEmailError('Please enter a valid email address.');
        setPasswordError(null);
        setSuccessMessage(false);
        return;
      }
  
      // Password validation
      if (password.length < 8) {
        setPasswordError('Password must be have more than 8 characters.');
        setEmailError(null);
        setSuccessMessage(false);
        return;
      }
  
      // Validation passed
      onSubmit(email, password);
  
      // Reset form
      setEmail('');
      setPassword('');
      setEmailError(null);
      setPasswordError(null);
      setSuccessMessage(true);
    };
  
    // Email format validation
    const isValidEmail = (value: string): boolean => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    };


    // JSX LoginForm
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={`w-full p-2 border rounded ${emailError ? 'border-red-500' : ''}`}
              placeholder="john.doe@example.com"
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className={`w-full p-2 border rounded ${passwordError ? 'border-red-500' : ''}`}
              placeholder="********"
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          {successMessage && (
            <p className="text-green-500 text-sm mb-4">Login successful!</p>
          )}
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            LogIn
          </button>
        </form>
      </div>
    );
};
