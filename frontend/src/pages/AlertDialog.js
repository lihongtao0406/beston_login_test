/* eslint-disable */
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2,fontWeight:'bold', color:'white',backgroundColor:'green'}} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen1] = React.useState(true);
  const handleClose = () => {
    setOpen1(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          BESTON
        </BootstrapDialogTitle>
        <DialogContent sx={{backgroundColor:'rgb(240,240,240)'}}>
          <Typography gutterBottom variant='h5' sx={{fontWeight:'bold',marginTop:2}}>
            Your password has been reset!
          </Typography>
          <Grid container rowSpacing={1} sx={{backgroundColor:'rgb(250,250,250)',padding:1,marginTop:3}}>
            <Grid sx={{marginRight:1}}>
              <MarkEmailReadIcon sx={{color:'green'}}/>
            </Grid>
            <Grid>
              <Typography>
              we've sent an email to choose a new one to <br></br>{localStorage.getItem('email')}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{backgroundColor:'rgb(240,240,240)'}}>
          <Button variant="contained" sx={{width:150,
          backgroundColor:'black',
          ':hover': {
            backgroundColor: 'rgb(75,75,75)'}}} onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}