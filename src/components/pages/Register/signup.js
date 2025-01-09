import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import axios from 'axios';

const Signup = () => {
  const [data, setData] = useState({
    UniName: '',
    userName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:8080/api/users';
      const { data: res } = await axios.post(url, data);
      window.location.href = "/";
      console.log(res.message);


      
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="formBox level-login">
        <div className="box boxShaddow"></div>

        <div className="box loginBox">
          <span className="reg_bg"></span>
          <h2>Register</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="f_row">
              <input
                type="text"
                className="input-field"
                name="UniName"
                placeholder="Uniname"
                value={data.UniName}
                onChange={handleChange}
                required
              />
              <u></u>
            </div>
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
                type="email"
                className="input-field"
                name="email"
                placeholder="Email"
                value={data.email}
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
            <button type="submit" className="btn-large">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
