import ReactDOM from 'react-dom/client';

import App from './componets/App/App';
import ErrorBoundary from './componets/ErrorBoundary/ErrorBoundary';

import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
