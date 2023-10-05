import Home from './components/pages/Home'
import About from './components/pages/About'
import Profile from './components/pages/Profile'
// import Scrapping from './components/Scrapping';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  // {
  //   path: "/scrapping",
  //   element: <Scrapping />,
  // },
]);

export default router