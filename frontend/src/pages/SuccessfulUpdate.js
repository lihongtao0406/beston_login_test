/* eslint-disable */
import { Link } from 'react-router-dom';
import React from 'react';
// material-ui
import { Grid, Typography } from '@mui/material';
// project imports
import AuthWrapper1 from './AuthWrapper1';
import AuthFooter from '../components/AuthFooter';

const SuccessfulUpdate = () => {

    return (
        <AuthWrapper1>
            <Typography variant="h5">Password Successful Update! </Typography>
            <Typography
                component={Link}
                to="/"
                variant="subtitle1"
                sx={{ textDecoration: 'underline', 
                color:'blue',
                }}
            >
                Login Page
            </Typography>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>               
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default SuccessfulUpdate;