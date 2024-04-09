// https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../actions/auth';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from '../../utils/formStyles';

const Login = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const { email, password } = formData;


  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Container component='main' maxWidth='xs' className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h4'>
<<<<<<< HEAD
          Padlet
        </Typography>
        <Typography component='h1' variant='h5'>
          Iniciar Sesion
=======
          Inicia Sesión
>>>>>>> d06ef2ca0972e2bf5b63b613e97c4954ec0f5fc3
        </Typography>
        <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Correo'
            name='email'
            autoComplete='email'
            autoFocus
            value={email}
            onChange={(e) => onChange(e)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Contraseña'
            type='password'
            autoComplete='current-password'
            value={password}
            onChange={(e) => onChange(e)}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
<<<<<<< HEAD
            Iniciar Sesion
=======
            Iniciar
>>>>>>> d06ef2ca0972e2bf5b63b613e97c4954ec0f5fc3
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='/register' variant='body2'>
<<<<<<< HEAD
                No tienes cuenta? Registrarse
=======
                No tienes cuenta? Registrate
>>>>>>> d06ef2ca0972e2bf5b63b613e97c4954ec0f5fc3
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        
      </Box>
    </Container>
  );
};

export default Login;
