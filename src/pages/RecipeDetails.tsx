import { useLoaderData } from "react-router-dom";

export default function RecipeDetails() {
  const recipe = useLoaderData();

  return (
    <>
      <h1>{recipe.name}</h1>
      <img src={recipe.picture} alt={recipe.name} />
      <p>{recipe.description}</p>
    </>
  );
}
