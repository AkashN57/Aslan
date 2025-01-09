import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import axios from 'axios';

const Login = () => {
  const [data, setData] = useState({ userName: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({...data, [name]:value})
    // setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
      await axios.post('http://localhost:8080/api/auth', {...data})
      localStorage.setItem('token', true);
      
      window.location.href="/home";

    } catch (error) {
      
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="formBox level-login">
          <div className="box boxShaddow"></div>
          <div className="box loginBox">
            <h2>LOGIN</h2>
            <form className="form" onSubmit={handleSubmit}>
              <div className="f_row">
                <input
                  type="text"
                  className="input-field"
                  name="userName"
                  placeholder="Username"
                  value={data.userName}
                  onChange={handleChange}
                  required
                />
                <u></u>
              </div>
              <div className="f_row last">
                <input
                  type="password"
                  className="input-field"
                  name="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={handleChange}
                  required
                />
                <u></u>
              </div>
              {error && <div>{error}</div>}
              <button type="submit" className="btn">
                Login
              </button>
              <div className="f_link">
                <Link to="/signup" className="resetTag">
                  You are a new user?
                </Link>
              </div>
            </form>
          </div>
          <div className="box forgetbox"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
