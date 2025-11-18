import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import {Provider} from 'react-redux';
import App from './pages/App';
import Trailmap from "./pages/Trailmap";
import Dashboard from './pages/Dashboard';
import { StrictMode } from 'react';
import Store from './lib/store/store'

let root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Provider store={Store}>
      <Router>
        <Routes >
            <Route path="/" element={<App />} />
            <Route path="/trailmap" element={<Trailmap />} />      
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes >
      </Router>
    </Provider>
  </StrictMode>,
)
