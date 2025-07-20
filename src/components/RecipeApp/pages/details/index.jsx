import React, { useEffect } from "react";
import { useRecipeContext } from "../../context";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const { recipeDetailsData, setRecipeDetailsData } = useRecipeContext();

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
    </div>
  );
};

export default Details;
