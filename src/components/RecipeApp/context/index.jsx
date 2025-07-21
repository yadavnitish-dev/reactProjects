import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RecipeContext = createContext(null);

export const RecipeProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const result = await response.json();
      // console.log(result);

      if (result?.data?.recipes) {
        setRecipeList(result?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        console.log(recipeList);
        navigate('/')
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setSearchParam("");
    }
  };

  const handleAddToFavorite = (getCurrentItem)=>{
    const cpyFavoriteList = [...favoriteList];
    const index = cpyFavoriteList.findIndex(item =>item.id===getCurrentItem.id);

    if(index ===-1){
      cpyFavoriteList.push(getCurrentItem)
    }else{
      cpyFavoriteList.splice(index);
    }
    setFavoriteList(cpyFavoriteList);
    console.log(favoriteList)
  }

  return (
    <RecipeContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        favoriteList,
        handleAddToFavorite
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipeContext must be used within a RecipeProvider");
  }
  return context;
};
