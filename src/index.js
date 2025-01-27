import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import VideoPage from './pages/VideoPage';
import RegisterPage from './pages/RegisterPage';
import MalumotPage from './pages/MalumotPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
const myRouter=createBrowserRouter([{
errorElement:<ErrorPage/>,
element:<App/>,
path:'/',
children:[
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/about',
    element:<AboutPage/>
  },
  {
    path:'/new',
    element:<NewsPage/>
  },
  {
    path:'/video',
    element:<VideoPage/>
  },
  {
    path:'/register',
    element:<RegisterPage/>
  },
  {
    path:'/malumot',
    element:<MalumotPage/>
  },
]
}])
root.render(
  <React.StrictMode>
  <RouterProvider router={myRouter} />
  </React.StrictMode>
);


