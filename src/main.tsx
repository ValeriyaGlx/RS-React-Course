import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './components/App/store/store';
import App from './components/App/App';

import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
