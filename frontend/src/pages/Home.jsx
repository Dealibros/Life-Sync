import '../styles/App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/media/life_sync_logo.png" className="App-logo" alt="logo" />
        <p className="welcome-message">
          Welcome to <span className="life-sync-title">Life Sync</span>
        </p>

        <div className="authentication-box">
          <div className="authentication-message">Let's get started! </div>

          <Link className="login-link" to="login">
            {' '}
            Login{' '}
          </Link>

          <div className="authentication-message">or </div>
          <Link className="register-link" to="register">
            {' '}
            Register{' '}
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
