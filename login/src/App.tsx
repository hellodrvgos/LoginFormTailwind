import './App.css';

import LoginForm from './components/LoginForm';

export default function App() {

  // Handle login form submission
  const handleLoginFormSubmit = (email: string, password: string): void => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <LoginForm onSubmit={handleLoginFormSubmit} />
  );
}
