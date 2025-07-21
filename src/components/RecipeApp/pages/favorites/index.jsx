import React from 'react'
import RecipeItem from '../../recipe-list';
import { useRecipeContext } from '../../context';

const Favorites = () => {
  const { favoriteList } = useRecipeContext();

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div className="lg:text-4xl text-center text-xl text-black font-extrabold">
          Nothing is added to Favorites yet.
        </div>
      )}
    </div>
  );
}

export default Favorites