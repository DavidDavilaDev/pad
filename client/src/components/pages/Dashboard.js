import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getBoards } from '../../actions/board';
import CreateBoard from '../other/CreateBoard';
import Navbar from '../other/Navbar';
import CircularProgress from '@material-ui/core/CircularProgress';

const Dashboard = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const boards = useSelector((state) => state.board.boards);
  const loading = useSelector((state) => state.board.dashboardLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

<<<<<<< HEAD
  useEffect(() => {
    document.title = 'Your Boards | Padlet';
  }, []);
=======
>>>>>>> d06ef2ca0972e2bf5b63b613e97c4954ec0f5fc3

  if (!isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <div className='dashboard-and-navbar'>
      <Navbar />
      <section className='dashboard'>
<<<<<<< HEAD
        <h1>Bienvenido {user && user.name}</h1>
        <h2>Tus tableros</h2>
=======
        <h1>Beinvenido {user && user.name}</h1>
>>>>>>> d06ef2ca0972e2bf5b63b613e97c4954ec0f5fc3
        {loading && <CircularProgress className='dashboard-loading' />}
        <div className='boards'>
          {boards.map((board) => (
            <Link key={board._id} to={`/board/${board._id}`} className='board-card'>
              {board.title}
            </Link>
          ))}
          <CreateBoard />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
