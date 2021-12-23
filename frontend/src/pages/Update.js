import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
/* eslint-disable */
// material-ui
import { useTheme } from '@mui/material/styles';
import { Collapse,AlertTitle,Alert,FormHelperText,TextField,Divider,Button, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import AuthWrapper1 from './AuthWrapper1';
import AuthCardWrapper from './AuthCardWrapper';
//import { ReactComponent as Logo } from '../assets/images/icons/beston.svg';
import Logo from '../assets/images/icons/beston.svg';
import AuthFooter from '../components/AuthFooter';
// assets

// ================================|| AUTH3 - LOGIN ||================================ //
const BASE_URL = 'https://loginapi1.herokuapp.com';
const Update = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const [email,setEmail]=useState('');
    const [newpassword,setNewPassword]=useState('');
    const [c_password,setConfirmNewPassword]=useState('');
    const [code,setCode]=useState('');
    const [err,setErrMsg]=useState();
    const navigate = useNavigate();
    const handleSubmit = async () =>{
        if(newpassword != c_password){
            setErrMsg('Password and Confirm Password must match!');

        }else if (newpassword ===''|| c_password === ''){
            setErrMsg('Password or Confirm Password can not be empty!');
        }else if (code === '' || code.length != 4){
            setErrMsg('Invalid Verification Code!');
        }else{
            setErrMsg('');
            const body = { 
                "email": email,
                "password": newpassword,
                "c_password": c_password,
                "token": code
             };
            const resp = await fetch(`${BASE_URL}/api/reset-password`,{
                body: JSON.stringify(body),
                method:'POST',
                headers:{'Content-Type':'application/json'},
            });
            if (resp.status === 200) {
                navigate('/successfulupdate');
            }
            else{
                setErrMsg('Failed to Update Password, please check your verification code!');
            }
        }  
    }

    useEffect(() => {
        setEmail(localStorage.getItem('email'));
      }, []);
    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item>
                                        <Link to="#">
                                            <img src={Logo} alt="Logo" />
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" >
                                                    <Typography
                                                        color='black'
                                                        gutterBottom
                                                        variant='h5'
                                                    >
                                                        Reset your password
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        fontSize="16px"
                                                        textAlign="center"
                                                        color="rgb(88,87,86)"
                                                        fontFamily='Poppins, sans-serif'
                                                    >
                                                        Enter your email address and we'll send you a link to reset it.
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={25} sx={{marginBottom:1}}>
                                        <Divider />
                                    </Grid>
                                    <Grid  item xs={33}>
                                        <TextField 
                                        disabled
                                        fullWidth 
                                        id="email-outlined-basic" 
                                        label="Email" 
                                        variant="outlined" 
                                        value={email}
                                        />
                                    </Grid>
                                    <Grid  item xs={33}>
                                        <TextField 
                                        fullWidth 
                                        id="password-outlined-basic" 
                                        label="New Password" 
                                        variant="outlined" 
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid  item xs={33}>
                                        <TextField 
                                        fullWidth 
                                        id="c_password-outlined-basic" 
                                        label="Confirm New Password" 
                                        variant="outlined" 
                                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid  item xs={33}>
                                        <TextField 
                                        fullWidth 
                                        id="verify-outlined-basic" 
                                        label="Verification Code" 
                                        variant="outlined" 
                                        onChange={(e) => setCode(e.target.value)}
                                        />
                                        <FormHelperText sx={{color:'red'}}>{err}</FormHelperText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Button 
                                            fullWidth 
                                            variant="contained" 
                                            color="success"
                                            onClick={handleSubmit}
                                            >
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default Update;
