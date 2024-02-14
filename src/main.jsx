import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles.css'; // Import your styles
import 'bootstrap/dist/css/bootstrap.css';

// Animation on scrolling 
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init();

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
