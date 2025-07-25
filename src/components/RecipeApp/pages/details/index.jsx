import React, { useEffect } from "react";
import { useRecipeContext } from "../../context";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorite,
    favoriteList,
  } = useRecipeContext();

  const getRecipeDetails = async () => {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const result = await response.json();
    console.log(result);

    if (result?.data) {
      setRecipeDetailsData(result?.data);
    }
  };

  useEffect(() => {
    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {" "}
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="font-bold truncate text-2xl text-black">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
            className="text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white mt-5"
          >
            {favoriteList && favoriteList.length >0 && favoriteList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe.id
            ) !== -1
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
              <li>
                <span className="text-2xl font-medium text-black">
                  {ingredient?.quantity} {ingredient?.unit}{" "}
                </span>
                <span className="text-2xl font-medium text-black">
                  {ingredient?.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
