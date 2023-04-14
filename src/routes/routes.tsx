import { useRoutes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import AboutPage from 'pages/AboutPage';
import TravelPage from 'pages/TravelPage';
import ProjectsPage from 'pages/ProjectsPage';
import ContactPage from 'pages/ContactPage';

const Router = function() {
  let element = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '*', element: <NotFoundPage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/travel', element: <TravelPage /> },
    { path: '/projects', element: <ProjectsPage /> },
    { path: '/contact', element: <ContactPage /> },
  ]);

  return element;
}

export default Router;
