import '../styles/Authentication.css';
import React, {useState} from "react";

export default function Register() {

    const initialCredentials = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
    };

    const [credentials, setCredentials] = useState(initialCredentials);

    async function registerUser() {
        if (credentials.firstname === "" || credentials.lastname === "" || credentials.username === "" || credentials.password === "") {
            alert("Fields are required");
        } else {
         await fetch('http://localhost:8080/authentication/register', {
             method: 'POST', headers: {
                 'Content-Type': 'application/json'
             }, body: JSON.stringify(credentials)
         })
    }}

    console.log(credentials)

    const handleFirstname = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCredentials(values => ({...values, [name]: value}))
    }

    const handleLastname = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCredentials(values => ({...values, [name]: value}))
    }

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
        registerUser().then(r => console.log(r));
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
                                <span className="padding-bottom--15 span-login">Register a new account</span>
                                <form id="stripe-login" onSubmit={handleSubmit}>
                                    <div className="field padding-bottom--24">
                                        <label className="label"
                                               htmlFor="firstname">First Name</label>
                                        <input name="firstname" value={credentials.firstname} onChange={handleFirstname}
                                               type="text"/>
                                    </div>
                                    <div className="field padding-bottom--24">
                                        <label className="label"
                                               htmlFor="lastname">Last Name</label>
                                        <input name="lastname" value={credentials.lastname} onChange={handleLastname}
                                               type="text"/>
                                    </div>
                                    <div className="field padding-bottom--24">
                                        <label className="label"
                                               htmlFor="username">Email</label>
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
                                    {/*<div className="field">
                                        <a className="ssolink" href="#" > Log in with google
                                            instead</a>
                                    </div>*/}

                                    <div className="google-btn">
                                        <div className="google-icon-wrapper">
                                            <img className="google-icon"
                                                 src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                                        </div>
                                        <p className="btn-text"><b>Sign in with google</b></p>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);

};





