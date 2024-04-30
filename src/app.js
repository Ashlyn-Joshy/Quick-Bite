import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import Profile from "./components/Profile";
import ShimmerEffect from "./components/ShimmerEffect";

const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));
const RestaurantDetails = lazy(() => import("./components/RestaurantDetails"));

const AppComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ShimmerEffect />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<ShimmerEffect />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: (
          <Suspense fallback={<ShimmerEffect />}>
            <RestaurantDetails />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
