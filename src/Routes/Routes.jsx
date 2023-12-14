import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import About from "../Pages/Home/About/About";
import Profile from "../Pages/Profile/Profile";
import CreatingList from "../Pages/Home/CreatingList/CreatingList";
import UpdateListing from "../Pages/Home/UpdateListing/UpdateListing";
import ListingPage from "../Pages/Home/ListingPage/ListingPage";
import SearchListingPage from "../Pages/Home/SearchListingPage/SearchListingPage";
import Contact from "../Pages/Contact/COntact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/create-listing",
        element: <CreatingList />
      },
      {
        path: "/update-listing/:id",
        element: <UpdateListing />
      },
      {
        path: "/listing/:id",
        element: <ListingPage />
      },
      {
        path: "/search",
        element: <SearchListingPage />
      },


    ],
  },
]);










