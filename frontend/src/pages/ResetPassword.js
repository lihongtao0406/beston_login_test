import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
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

const ResetPassword = () => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const [email,setEmail]=useState();
    const [err,setErrMsg]=useState();
    const [open,setOpen]=useState(false);
    const navigate = useNavigate();
    const handleSubmit = () =>{
        if(email == ''||email==null){
            setErrMsg('Please fill in your registered email address');
            setOpen(true);
        }else if (!reg.test(email) && email.length>0){
            setErrMsg('Please enter a valid email address');
            setOpen(true);
        }else{
            setErrMsg('');
            setOpen(false);
            localStorage.setItem('email',email);
            navigate('/alert');
        }  
    }
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
                                                        Forget your password?
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
                                    <Collapse in={open}>
                                        <Alert severity="warning">
                                            <AlertTitle><strong>To continue..</strong></AlertTitle>
                                            {err}
                                        </Alert>
                                    </Collapse>
                                    <Grid  item xs={33}>
                                        <TextField 
                                        fullWidth 
                                        id="outlined-basic" 
                                        label="Email" 
                                        variant="outlined" 
                                        onChange={(e) => setEmail(e.target.value)}
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

export default ResetPassword;
