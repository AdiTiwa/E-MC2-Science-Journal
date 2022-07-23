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
    <Flowbite
      theme={{
      theme: {
        navbar: {
          base: 'border-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4',
          link: {
            base: 'block py-2 pr-4 pl-3 md:p-0 text-lg',
            active: {
              on: 'bg-maroon-200 text-white dark:text-white md:bg-transparent md:text-maroon-200',
              off: 'border-b border-gray-100 text-gray-700 hover:bg-maroon-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-maroon-100 md:dark:hover:bg-transparent md:dark:hover:text-white',
            },
            disabled: {
              on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
            },
          },
        },
        button: {
          color: {
            light: 'text-maroon-100 bg-white border-4 border-gray-300 hover:bg-maroon-200 hover:text-white hover:border-white focus:ring-4 focus:ring-maroon-200 disabled:hover:bg-white dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'
          }
        }
      },
    }}
    dark={false}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/support" element={<Support />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/issues/:year" element={<Issues />} />
          <Route path="/issues/:year/:articleId" element={<Issues />} />
        </Routes>
      </BrowserRouter>
    </Flowbite>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
