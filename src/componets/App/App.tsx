import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../pages/Layout/Layout';
import CharacterCard from '../pages/CardInfo/CharacterCard';
import FallDownUI from '../shared/UI/FallDownUI/FallDownUI';
import NotFound from '../pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <FallDownUI />,
    children: [
      {
        path: ':id',
        element: <CharacterCard />,
        errorElement: <NotFound />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
