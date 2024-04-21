import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles.css'; // Import your styles
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import UserContextProvider from './components/context/Provider.jsx';
import { BrowserRouter } from 'react-router-dom';


// Animation on scrolling 
AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
    </UserContextProvider>

)
