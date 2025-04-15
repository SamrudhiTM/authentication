import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";


function AuthSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (token) {
        const decoded = jwtDecode(token);
        console.log("Decoded token:", decoded);
        
      localStorage.setItem('token', token);
      navigate('/dashboard');
    }
  }, [navigate]);

// useEffect(() => {
//     navigate('/dashboard');
//   }, [navigate]); 

  return <div>Logging you in...</div>;
}

export default AuthSuccess;
