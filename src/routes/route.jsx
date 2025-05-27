import Signup from '@/pages/signup';
import Entry from '@/pages/entry';
import Login from '@/pages/login';
import Home from '@/pages/home';
import AddAnniversary from '@/pages/add';
import Upcoming from '@/pages/upcoming';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Entry />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/anniversary/add',
    element: <AddAnniversary />,
  },
  {
    path: '/upcoming',
    element: <Upcoming />,
  },
]);

export default router;
