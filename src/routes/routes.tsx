import { useDispatch } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import AboutPage from 'pages/AboutPage';
import TravelPage from 'pages/TravelPage';
import ProjectsPage from 'pages/ProjectsPage';
import ContactPage from 'pages/ContactPage';

import { useGetTravelLogByTripNameQuery } from 'apis/travelLog';
import { globeDataCreated } from 'slices/travelGlobeData';

const Router = function() {
  const { data, error, isLoading } = useGetTravelLogByTripNameQuery('World Tour 2021-2023');

  const dispatch = useDispatch();

  if (!isLoading) {
    dispatch(globeDataCreated(data));
  }

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
