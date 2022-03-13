import { useRoutes } from "react-router-dom";
import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';

const Router = function() {
  let element = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/about', element: <AboutPage /> },
  ]);

  return element;
}

export default Router;
