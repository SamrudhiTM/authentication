import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginButtons from './components/Homepage';
import AuthSuccess from './components/AuthSucces';
import Dashboard from './components/Dashboard';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginButtons />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/auth-success" element={<AuthSuccess />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
