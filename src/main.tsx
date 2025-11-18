import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import App from './pages/App';
import Trailmap from './pages/Trailmap';
import Dashboard from './pages/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';
import Store from './lib/store/store';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={Store}>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/trailmap" element={<Trailmap />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
