import React from "react";
import { useRecipeContext } from "../../context";
import RecipeItem from "../../recipe-list";

const Home = () => {
  const { recipeList, loading } = useRecipeContext();

  if (loading) return <div>Loading... Please wait!!!</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div className="lg:text-4xl text-center text-xl text-black font-extrabold">
          Nothing to Show. Please Search Something
        </div>
      )}
    </div>
  );
};

export default Home;
