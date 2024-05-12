import React from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Todo from './Components/TodoApp/components/Todo.jsx'
import ErrorBoundary from './ErrorBoundary';
import LandingPage from './Components/LandingPage/LandingPage';
import Banner from './Components/LandingPage/Banner/Banner.jsx';
import Layout from './Layout.jsx';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/store'; // Import the store without curly braces
import NotesApp from './Components/NotesApp/NotesApp.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <LandingPage/>,
      },
      {
        path: 'Todo',
        element: <Todo/>,
      },
      {
        path: 'NotesApp',
        element: <NotesApp/>,
      },
     
    ],
  },
]);

const rootContainer = document.getElementById('root');

createRoot(rootContainer).render(

    <React.StrictMode>
    <Provider store={store}>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
        </Provider>
    </React.StrictMode>

);
