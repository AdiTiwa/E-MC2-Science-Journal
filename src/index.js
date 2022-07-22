import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Flowbite } from 'flowbite-react'
import Gallery from './routes/gallery';
import HomePage from './routes/App';
import About from './routes/about';
import Resources from './routes/resources';
import Support from './routes/support';
import Issues from './routes/issues';
import 'flowbite';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/support" element={<Support />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/issues/:year" element={<Issues />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
