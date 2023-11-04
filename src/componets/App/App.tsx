import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../pages/Layout/Layout';
import CardInfo from '../pages/CardInfo/CardInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/:id',
        element: <CardInfo />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
