import '../styles/App.css';
import {Link} from 'react-router-dom';

function Home() {

    return (<div className="App">
        <header className="App-header">

            <img src="/media/life_sync_logo.png" className="App-logo" alt="logo"/>
            <p className="welcome-message">
                Welcome to <span className="life-sync-title">Life Sync</span></p>

            {/*<Link to="calendarPage"> Let's get started! </Link>*/}

            <div className="authentication-box">

            <div className="authentication-message">
                Let's get started! You can </div>

            <Link to="login"> Login </Link>


            <div className="authentication-message">
                Or </div>
            <Link to="Register"> Register here. </Link>

            </div>

        </header>
    </div>);
}

export default Home;
