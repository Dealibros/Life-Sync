import '../styles/Authentication.css';
import React, {useState} from 'react';


export default function Login() {

    const initialCredentials = {
        username: "",
        password: "",
    };

    const [credentials, setCredentials] = useState(initialCredentials);

    async function loginUser() {
        if (credentials.username === "" || credentials.password === "") {
            alert("Fields are required");
        } else {
        await fetch('http://localhost:8080/authentication/login', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, mode: "no-cors", body: JSON.stringify(credentials)
        })
            .then(data => console.log(data.json()))
    }}

    console.log(credentials)

    const handleUsername = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCredentials(values => ({...values, [name]: value}))
    }

    const handlePassword = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCredentials(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
        loginUser().then();
        e.preventDefault();
    };

    return (
        <div className="login-root">
            <div className="box-root flex-flex flex-direction--column" style={{minHeight: '100vh', flexGrow: 1}}>

                <div className="box-root padding-top--24 flex-flex flex-direction--column"
                     style={{flexGrow: 1, zIndex: 9}}>
                    <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                        <span className="life-sync-title">LifeSync</span>
                    </div>
                    <div className="formbg-outer">
                        <div className="formbg">
                            <div className="formbg-inner padding-horizontal--48">
                                <span className="padding-bottom--15 span-login">Sign in to your account</span>
                                <form id="stripe-login" onSubmit={handleSubmit}>
                                    <div className="field padding-bottom--24">
                                        <label className="label"
                                               htmlFor="email">Email</label>
                                        <input name="username" value={credentials.username} onChange={handleUsername}
                                               type="email"/>
                                    </div>
                                    <div className="field padding-bottom--24">
                                        <div className="grid--50-50">
                                            <label className="label"
                                                   htmlFor="password">Password</label>
                                            <div className="reset-pass">
                                                <a href="#">Forgot your password?</a>
                                            </div>
                                        </div>
                                        <input type="password" name="password" value={credentials.password}
                                               onChange={handlePassword}/>
                                    </div>

                                    <div className="field padding-bottom--24">
                                        <input type="submit" name="submit" defaultValue="Continue"/>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};





