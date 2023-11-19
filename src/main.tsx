import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { setupStore } from './componets/App/store/store';
import App from './componets/App/App';
import ErrorBoundary from './componets/shared/UI/ErrorBoundary/ErrorBoundary';

import './global.css';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);
