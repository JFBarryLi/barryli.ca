import { useRoutes } from "react-router-dom";
import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';
import ProjectsPage from 'pages/ProjectsPage';

const Router = function() {
  let element = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/projects', element: <ProjectsPage /> },
  ]);

  return element;
}

export default Router;
