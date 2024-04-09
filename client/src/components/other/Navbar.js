import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/auth';

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    return '';
  }

  return (
    <nav className='navbar'>
      <Link to='/dashboard'>Home</Link>
<<<<<<< HEAD
      <Link to='/dashboard'>Padlet</Link>
      <Link to='/' onClick={() => dispatch(logout())}>
        Cerrar Sesion
=======
      <Link to='/' onClick={() => dispatch(logout())}>
        Cerrar Sesión
>>>>>>> d06ef2ca0972e2bf5b63b613e97c4954ec0f5fc3
      </Link>
    </nav>
  );
};

export default Navbar;
