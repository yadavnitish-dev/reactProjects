import { createContext } from "react";

export const RecipeContext = createContext(null);

export const RecipeProvider = ({ children }) => {
  return <RecipeContext.Provider value={{}}>{children}</RecipeContext.Provider>;
};
