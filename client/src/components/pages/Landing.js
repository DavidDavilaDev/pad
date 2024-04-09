import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

<<<<<<< HEAD
  useEffect(() => {
    document.title = 'Padlet';
  }, []);

=======
>>>>>>> d06ef2ca0972e2bf5b63b613e97c4954ec0f5fc3
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
<<<<<<< HEAD
      <nav className='top'>
        <h2>Padlet</h2>
=======
      <nav className='landing-inner'>
        <h2></h2>
>>>>>>> d06ef2ca0972e2bf5b63b613e97c4954ec0f5fc3
        <div>
          <Button color='inherit' href='/login'>
            Iniciar Sesion
          </Button>
          <Button variant='contained' href='/register'>
            Registrarse
          </Button>
        </div>
      </nav>
<<<<<<< HEAD
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
=======
>>>>>>> d06ef2ca0972e2bf5b63b613e97c4954ec0f5fc3
    </section>
  );
};

export default Landing;
