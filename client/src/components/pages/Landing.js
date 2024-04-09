import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    document.title = 'Padlet';
  }, []);

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <nav className='top'>
        <h2>Padlet</h2>
        <div>
          <Button color='inherit' href='/login'>
            Iniciar Sesion
          </Button>
          <Button variant='contained' href='/register'>
            Registrarse
          </Button>
        </div>
      </nav>
      <div className='landing-inner'>
        <h1>Padlet</h1>
        <p>
          
        </p>
        <div className='buttons'>
          <Button variant='outlined' color='inherit' href='/register'>
            Registrarse
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
