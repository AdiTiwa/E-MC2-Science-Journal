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
          base: 'bg-maroon-200 px-2 py-2.5 shadow-2xl md:bg-maroon-200 dark:border-gray-700 dark:bg-maroon-200 sm:px-4',
          link: {
            base: 'block py-2 pr-4 pl-3 md:p-0 text-lg',
            active: {
              on: 'bg-white text-maroon-200 dark:text-white md:bg-transparent md:text-white',
              off: 'text-white hover:bg-maroon-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-maroon-100 md:text-white md:dark:hover:bg-transparent md:dark:hover:text-white',
            },
            disabled: {
              on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
            },
          },
          toggle: {
            base: 'ml-3 inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-gray-400  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden',
            icon: 'h-6 w-6 shrink-0',
          },
        },
        button: {
          color: {
            light: 'text-sm font-bold text-center text-white bg-maroon-200 border-4 border-white rounded-lg hover:bg-maroon-200 hover:text-white hover:border-transparent focus:ring-4 focus:outline-none focus:ring-ghostly-black '
          }
        },
        badge: {
          color: {
            light: "bg-gray-100 bg-contain tracking-tight flex flex-wrap"
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
            base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-silver/70 group-focus:outline-none group-focus:ring-4 group-focus:ring-silver/80 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
            icon: 'h-5 w-5 text-gold dark:text-maroon-200 sm:h-6 sm:w-6',
          },
          leftControl: 'absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none',
          rightControl: 'absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none',
          scrollContainer: {
            base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg',
            snap: 'snap-x',
          },
        },
        darkThemeToggle: {
          base: 'rounded-lg p-2.5 text-sm text-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700',
          icon: 'h-5 w-5 md:h-3 md:w-3',
        },
        footer: {
          base: 'w-full rounded-lg bg-white shadow-2xl dark:bg-gray-800 md:flex md:items-center md:justify-between',
          container: 'w-full p-6',
          bgDark: 'bg-gray-800',
          groupLink: {
            base: 'flex flex-wrap text-sm text-gray-800 dark:text-white',
            link: {
              base: 'last:mr-0 md:mr-6',
              href: 'hover:underline',
            },
            col: 'flex-col space-y-4',
          },
          icon: {
            base: 'text-white dark:hover:text-white',
            size: 'h-5 w-5',
          },
          title: {
            base: 'mb-6 text-sm font-semibold uppercase text-maroon-200 md:text-white dark:text-white',
          },
          divider: {
            base: 'w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8',
          },
          copyright: {
            base: 'text-sm text-silver dark:text-gray-400 sm:text-center',
            href: 'ml-1 hover:underline',
            span: 'ml-1',
          },
          brand: {
            base: 'mb-4 flex items-center sm:mb-0',
            img: 'mr-3 h-8',
            span: 'self-center whitespace-nowrap text-2xl font-semibold text-maroon-200 dark:text-white',
          },
        },
      },
    }}
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
