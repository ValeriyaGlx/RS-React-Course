import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../pages/Layout/Layout';
import CardInfo from '../pages/CardInfo/CardInfo';
import FallDownUI from '../shared/UI/FallDownUI/FallDownUI';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <FallDownUI />,
    children: [
      {
        path: ':id',
        element: <CardInfo />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
