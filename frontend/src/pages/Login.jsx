import '../styles/Authentication.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const initialCredentials = {
    username: '',
    password: '',
  };

  let navigate = useNavigate();

  const [credentials, setCredentials] = useState(initialCredentials);

  const loginUser = (e) => {
    e.preventDefault();
    let encodedData = window.btoa(
      credentials.username + ':' + credentials.password,
    );

    const requestOptions = {
      method: 'POST',
      headers: {
        authorization: 'Basic ' + encodedData,
      },
    };

    if (credentials.username === '' || credentials.password === '') {
      alert('Fields are required');
    } else {
      return fetch('http://localhost:8080/authentication/login', requestOptions)
        .then((response) => response.text())
        .then((token) => {
          localStorage.setItem('token', token);
          localStorage.setItem('username', credentials.username);
          if (token) {
            navigate('/calendarPage');
          } else {
            alert('Wrong username or password, try again!');
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  console.log(localStorage);

  const handleUsername = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCredentials((values) => ({ ...values, [name]: value }));
  };

  const handlePassword = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCredentials((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="login-root">
      <div
        className="box-root flex-flex flex-direction--column"
        style={{ minHeight: '100vh', flexGrow: 1 }}
      >
        <div
          className="box-root padding-top--24 flex-flex flex-direction--column"
          style={{ flexGrow: 1, zIndex: 9 }}
        >
          <div className="title-div-login">
            <span className="life-sync-title-register-login">LifeSync</span>
          </div>
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15 span-login">
                  Sign in to your account
                </span>
                <form id="stripe-login">
                  <div className="field padding-bottom--24">
                    <label className="label" htmlFor="username">
                      Email
                    </label>
                    <input
                      name="username"
                      value={credentials.username}
                      onChange={handleUsername}
                      type="email"
                    />
                  </div>
                  <div className="field padding-bottom--24">
                    <div className="grid--50-50">
                      <label className="label" htmlFor="password">
                        Password
                      </label>
                      {/* <div className="reset-pass">
                                                <a href="#">Forgot your password?</a>
                                            </div> */}
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={credentials.password}
                      onChange={handlePassword}
                    />
                  </div>

                  <div className="field padding-bottom--24">
                    <button
                      className="submit-button-form"
                      onClick={(e) => loginUser(e)}
                      type="submit"
                      name="submit"
                      defaultValue="Continue"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
