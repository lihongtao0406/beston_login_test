/* eslint-disable */
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from '../hooks/useScriptRef';
import Google from '../assets/images/icons/social-google.svg';
import AnimateButton from '../components/AnimateButton';
import { strengthColor, strengthIndicator } from '../utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ===========================|| FIREBASE - REGISTER ||=========================== //
const BASE_URL = 'https://loginapi1.herokuapp.com';
const FirebaseRegister = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    //const customization = useSelector((state) => state.customization);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [checked, setChecked] = useState(false);

    const [strength, setStrength] = useState(0);
    const [level, setLevel] = useState();
    const [status, setStatus] = useState({});
    const [errors, setErrors] = useState({});
    const navigate=useNavigate();
    const googleHandler = async () => {
        console.error('Register');
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };


    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                
                
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="body2"fontWeight='bold'>Sign up with Email address</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Formik
                initialValues={{
                    name:'',
                    email: '',
                    password: '',
                    c_password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required'),
                    c_password: Yup.string().max(255).required('Confirm Password is required'),
                    name: Yup.string().max(255).required('Name is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        const body={
                            "name":values.name,
                            "email":values.email,
                            "password":values.password,
                            "c_password":values.c_password
                        }
                        const resp = await fetch(`${BASE_URL}/api/register`,{
                            body: JSON.stringify(body),
                            method:'POST',
                            headers:{'Content-Type':'application/json'},
                        });
                        //console.log(resp);
                        if (resp.status === 200) {
                            const tokenObj = await resp.json();
                            localStorage.setItem('token',tokenObj.success.token);
                            navigate('/dashboard');
                        }
                        else{
                            const tokenObj = await resp.json();
                            // console.log(tokenObj.error.c_password);
                            // console.log(tokenObj.error.email[0]);
                            if (tokenObj.error.email) {
                                setStatus({ success: false });
                                setErrors({ submit: tokenObj.error.email[0] });
                                setSubmitting(false);
                            } else if (tokenObj.error.c_password) {
                                setStatus({ success: false });
                                setErrors({ submit: tokenObj.error.c_password[0] });
                                setSubmitting(false);
                            }
                        }
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <FormControl fullWidth error={Boolean(touched.name && errors.name)} sx={{marginBottom:2 }}>
                            <InputLabel htmlFor="outlined-adornment-name-register" color="success">Name</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-name-register"
                                type="name"
                                value={values.name}
                                name="name"
                                label="Name"
                                color="success"
                                sx={{borderRadius:3}}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.name && errors.name && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.name}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{marginBottom:2 }}>
                            <InputLabel htmlFor="outlined-adornment-email-register" color="success">Email Address / Username</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-register"
                                type="email"
                                value={values.email}
                                name="email"
                                label="Email Address / Username"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                sx={{borderRadius:3}}
                                color="success"
                                inputProps={{}}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{marginBottom:2 }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password-register" color="success">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-register"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                label="Password"
                                sx={{borderRadius:3}}
                                color="success"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    changePassword(e.target.value);
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                inputProps={{}}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-register">
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {strength !== 0 && (
                            <FormControl fullWidth>
                                <Box sx={{ mb: 2 }}>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Box
                                                style={{ backgroundColor: level?.color }}
                                                sx={{ width: 85, height: 8, borderRadius: '7px' }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" fontSize="0.75rem">
                                                {level?.label}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </FormControl>
                        )}
                        <FormControl
                            fullWidth
                            error={Boolean(touched.c_password && errors.c_password)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password-register1" color="success">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-register1"
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={values.c_password}
                                name="c_password"
                                color="success"
                                sx={{borderRadius:3}}
                                label="confirm password"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                inputProps={{}}
                            />
                            {touched.c_password && errors.c_password && (
                                <FormHelperText error id="standard-weight-helper-text-password-register">
                                    {errors.c_password}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked}
                                            onChange={(event) => setChecked(event.target.checked)}
                                            name="checked"
                                            color="success"
                                        />
                                    }
                                    label={
                                        <Typography variant="subtitle1">
                                            Agree with &nbsp;
                                            <Typography variant="subtitle1" component={Link} to="#">
                                                Terms & Condition.
                                            </Typography>
                                        </Typography>
                                    }
                                />
                            </Grid>
                        </Grid>
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={!checked}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="success"
                                >
                                    Sign up
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseRegister;
