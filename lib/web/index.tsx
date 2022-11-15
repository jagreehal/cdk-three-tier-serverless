import App from './App';
import './App.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const renderApp = () =>
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser')
    .then(({ worker }) => {
      worker.start();
    })
    .then(() => renderApp());
} else {
  renderApp();
}
