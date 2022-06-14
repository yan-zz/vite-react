import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Page } from './components/Page';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
