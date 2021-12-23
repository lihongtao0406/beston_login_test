/* eslint-disable */
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Collapse,AlertTitle,Alert,FormHelperText,TextField,Divider,Button, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import './glogin.css';
// project imports
import AuthWrapper1 from './AuthWrapper1';
import AuthCardWrapper from './AuthCardWrapper';
//import { ReactComponent as Logo } from '../assets/images/icons/beston.svg';
import Logo from '../assets/images/icons/beston.svg';
import AuthFooter from '../components/AuthFooter';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
// assets

// ================================|| AUTH3 - LOGIN ||================================ //
const clientId = "478997505652-it2julupjvq79s6kivqcjl48a7lns4et.apps.googleusercontent.com";
//const clientId = "300108928854-e0soq8gp7m086n3ur9jbmob4qf8frfit.apps.googleusercontent.com";
const DashBoard = () => {
    const navigator = useNavigate();
    const [content,setContent]=useState();
    const getMsg = () => {       
        setContent('Login Success!');
    }
    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        navigator('/');
    };
    useEffect(()=>{
        getMsg();
    },[])
    return (
        <AuthWrapper1>
            <Typography variant="h5">{content}</Typography>
            <GoogleLogout
                    className="gsignout"
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
            </GoogleLogout>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>               
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default DashBoard;
