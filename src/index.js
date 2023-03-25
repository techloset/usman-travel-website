import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header/header'
import LandingPage from './pages/landingpage'
import About from './pages/subSection'
import Destination from './components/destinations/destination';
import BeachDestination from './components/beachDestination/beachDestination';
import bg1 from '../src/images/bg.png'
import bg2 from '../src/images/second.webp'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header element={<Destination></Destination>}  bgImg={bg1} ><LandingPage /></Header>,
  },
  {
    path: "/About",
    element: <Header element={<BeachDestination/> } bgImg={bg2}  ><About />  </Header>,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <RouterProvider router={router} />
    {/* <App/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
