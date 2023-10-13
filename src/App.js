import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, { loader as RootLoader } from './components/Home/Root';
import Header, { loader as Headloader } from './components/header/Header';
import Slider from './components/side/Slider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // Use JSX to create the Root component
    loader: RootLoader,
    children: [
      // Define child routes if necessary
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

