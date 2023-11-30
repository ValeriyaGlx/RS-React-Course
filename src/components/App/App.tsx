import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NotFound from '../pages/NotFound/NotFound';
import Layout from '../widgets/Layout/Layout';
import ReactHookForm from '../pages/ReactHookForm/ReactHookForm';
import UncontrolledForm from '../pages/UncontrolledForm/UncontrolledForm';
import MainPage from '../pages/MainPage/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: ,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: 'uncontrolled-form',
        element: <UncontrolledForm />,
      },
      {
        path: 'react-hook-form',
        element: <ReactHookForm />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
