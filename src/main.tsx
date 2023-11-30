import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { setupStore } from './components/App/store/store';
import App from './components/App/App';

import './global.css';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
