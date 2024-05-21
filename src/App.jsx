import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Favourites, Home, Login, MealDetail, Meals, NotFound, Register } from "./pages";
import { AuthLayout, MainLayout } from "./layout";
import { useProtectedRoutesContext } from "./context/ProtectedRouteContext";
import { GetFromStorage } from "./helpers";

const isAuthenticated = (user) => {
  return user || GetFromStorage('token');
};

function App() {
  const { user } = useProtectedRoutesContext();

  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthLayout />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: isAuthenticated(user) ? <MainLayout /> : <Navigate to="/auth/login" />,
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
      ],
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App
