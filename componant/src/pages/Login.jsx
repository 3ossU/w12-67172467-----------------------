import { verifyUser } from '../data/user';
import './login.css';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';

function Login({ setToken , setRole}) {
  const userRef = useRef();
  const passRef = useRef();

  const handleLogin = () => {
    const user = userRef.current.value.trim();
    const pass = passRef.current.value.trim();
    userRef.current.value = '';
    passRef.current.value = '';

    const userInfo = verifyUser(user, pass);
    if (userInfo === null) {
      alert('Invalid username or password');
      userRef.current.focus();
    } else {
      setToken(userInfo.token);
      setRole(userInfo.role);
    }
  };

  return (
    <div className="login-container">
      <Form.Label htmlFor="username">Username</Form.Label>
      <Form.Control
        type="text"
        id="username"
        placeholder="username"
        style={{ textAlign: 'center' }}
        ref={userRef}
      />

      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Control
        type="password"
        id="password"
        placeholder="password"
        style={{ textAlign: 'center' }}
        ref={passRef}
        onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
      />

      <button
        type="button"
        className="btn btn-success mt-3"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
