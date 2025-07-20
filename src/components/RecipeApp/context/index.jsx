import { createContext , useContext, useState} from "react";

export const RecipeContext = createContext(null);

export const RecipeProvider = ({ children }) => {

  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);

  const handleSubmit = async(event)=>{
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
      const result = await response.json();
      // console.log(result);

      if(result?.data?.recipes) {
        setRecipeList(result?.data?.recipes)
        setLoading(false);
        setSearchParam("");
        console.log(recipeList);
      }
        
      
    } catch (error) {
      setLoading(false);
      console.log(error);
      setSearchParam("");
    }

  }

  return <RecipeContext.Provider value={{searchParam, setSearchParam, handleSubmit, loading, recipeList, recipeDetailsData, setRecipeDetailsData}}>{children}</RecipeContext.Provider>;
};

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipeContext must be used within a RecipeProvider");
  }
  return context;
}
