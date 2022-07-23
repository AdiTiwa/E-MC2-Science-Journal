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
        },
        badge: {
          color: {
            light: "bg-gray-100 bg-contain tracking-tight flex flex-wrap"
          }
        }
      },
      carousel: {
        base: 'relative h-full w-full',
        indicators: {
            active: {
                off: 'bg-white/50 hover:bg-maroon-100 dark:bg-gray-800/50 dark:hover:bg-gray-800',
                on: 'bg-silver dark:bg-gray-800',
            },
            base: 'h-3 w-3 rounded-full',
            wrapper: 'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3',
        },
        item: {
            base: 'absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2',
            wrapper: 'w-full flex-shrink-0 transform cursor-grab snap-center',
        },
        control: {
            base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-maroon-100 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
            icon: 'h-5 w-5 text-maroon-200 dark:text-maroon-200 sm:h-6 sm:w-6',
        },
        leftControl: 'absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none',
        rightControl: 'absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none',
        scrollContainer: {
            base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg',
            snap: 'snap-x',
        },
    }
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
