import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/common.css';
import LayoutPage from './pages/LayoutPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LayoutPage />
  </StrictMode>
)
