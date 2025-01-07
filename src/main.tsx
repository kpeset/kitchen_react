// Import configuration système
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import pages
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Recipes from "./pages/Recipes.tsx";
import RecipeDetails from "./pages/RecipeDetails.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

// Import services
import { getAllRecipes, getRecipeDetails } from "./services/requests.ts";

// Import CSS
import "./styles/app.css";
import "./styles/header.css";
import "./styles/footer.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
        loader: getAllRecipes,
      },
      {
        path: "/recipes/:id",
        element: <RecipeDetails />,
        loader: ({ params }) => getRecipeDetails(Number(params.id)),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = document.getElementById("root");

if (!root) {
  throw new Error("Erreur");
}

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
