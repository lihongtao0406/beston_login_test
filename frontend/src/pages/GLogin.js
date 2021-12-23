/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Grid from '@mui/material/Grid';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './glogin.css';
const clientId = "478997505652-it2julupjvq79s6kivqcjl48a7lns4et.apps.googleusercontent.com";
//const clientId = "300108928854-e0soq8gp7m086n3ur9jbmob4qf8frfit.apps.googleusercontent.com";
function GLogin() {

    const navigate=useNavigate();
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        navigate('/dashboard');
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    return (
        <Grid>
            <GoogleLogin
                className="gsignin"
                clientId={clientId}
                buttonText="SIGN IN WITH GOOGLE"
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            /> 
        </Grid>
    );
}
export default GLogin;