import React from 'react';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Container';

import { makeStyles } from '@mui/styles';
import CoffeeMaker from '@mui/icons-material/CoffeeMaker';
import { Login } from './Login';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
      },
      root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      title:{
        margin: theme.spacing(1),
        'font-family': 'Arial'
      }
}))
  

function LoginPage() {
    const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Paper  className={classes.paper} elevation={3}>
        <Avatar  className={classes.avatar}>
          <CoffeeMaker />
        </Avatar>
        <Typography className={classes.title} variant="h1">
           coffee chats
        </Typography>
        <Login/>
      </Paper>
    </Container>
  );
}

export default LoginPage;
