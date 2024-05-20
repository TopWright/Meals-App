import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Favourites, Home, MealDetail } from "./pages";
import MainLayout from "./layout";
import Meals from "./pages/Meals";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "meals",
          element: <Meals />,
        },
        {
          path: "meal/:id",
          element: <MealDetail />,
        },
        {
          path: "favourites",
          element: <Favourites />,
        },
        // {
        //   path: "profile",
        //   element: <Profile />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
