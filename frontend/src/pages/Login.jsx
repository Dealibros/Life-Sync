import '../styles/Authentication.css';
import React, { useState } from 'react';
import {decode as base64_decode, encode as base64_encode} from 'base-64';


export default function Login() {

    const initialCredentials = {
        username: "",
        password: "",
    };

    
    


    const [credentials, setCredentials] = useState(initialCredentials);

    const loginUser = (e) => {
        //let encodedData = window.btoa(credentials);
        // let encodedData = Buffer.from(JSON.stringify(credentials)).toString('base64');
        
        // //let authorizationHeaderString = "Authorization: Basic " + encodedData;
        let encodedData = base64_encode(credentials.username +":" + credentials.password)
        console.log("encoded data ", encodedData)
        let authorizationHeaderString = "Authorization: Basic " + encodedData;

        console.log("CREDENTIALS ", credentials)
        console.log("STARING")
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                // 'Authorization': "Bearer Token",
                // // 'Accept': 'application/json',s
                // 'Authorization': 'Basic ' + credentials,
                 //'Content-Type': 'application/json',
                 'Authorization': 'Basic' + encodedData,
            },
             body: JSON.stringify(credentials)
        };


        if (credentials.username === "" || credentials.password === "") {
            alert("Fields are required");
        } else {
            console.log("FETCHING")
            fetch('http://localhost:8080/authentication/login', requestOptions)

                .then(response => {
                    if (!response.ok) throw new Error(response.status);
                    console.log(response.json)
                })


        }
    }



    function testing() {
        let decodedData = base64_decode("ZG9yaWFuYUBnbWFpbC5jb206MTIzNDU2");
        console.log("DECODE", decodedData)
    }

    testing();

    console.log(credentials)

    const handleUsername = (event) => {
        const name = event.target.name; 
        const value = event.target.value;
        setCredentials(values => ({ ...values, [name]: value }))

        

    }

    const handlePassword = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCredentials(values => ({ ...values, [name]: value }))
    }

    return (
        <div className="login-root">
            <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>

                <div className="box-root padding-top--24 flex-flex flex-direction--column"
                    style={{ flexGrow: 1, zIndex: 9 }}>
                    <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                        <span className="life-sync-title">LifeSync</span>
                    </div>
                    <div className="formbg-outer">
                        <div className="formbg">
                            <div className="formbg-inner padding-horizontal--48">
                                <span className="padding-bottom--15 span-login">Sign in to your account</span>
                                <form id="stripe-login">
                                    <div className="field padding-bottom--24">
                                        <label className="label"
                                            htmlFor="username">Email</label>
                                        <input name="username" value={credentials.username} onChange={handleUsername}
                                            type="email" />
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
                                            onChange={handlePassword} />
                                    </div>

                                    <div className="field padding-bottom--24">
                                        <button className='submit-button' onClick={(e) => loginUser(e)} type="submit" name="submit" defaultValue="Continue">Submit</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};





