import { createContext, useState } from "react";

export const FavouriteContext = createContext({
    ids:[],
    addFavourite:(id)=>{},
    removeFavourite:(id)=>{}

});


function FavouriteContextProvider({children}){

    const [favMealIds,setFavMealIds]= useState([]);

    function addFavourite(id){
      setFavMealIds((currentFavIds)=>[...currentFavIds,id]);
    }

    function removeFavourite(id){
        setFavMealIds((currentFavIds)=>currentFavIds.filter(mealId=>mealId!==id));
    }

    const value = {
        ids:favMealIds,
        addFavourite:addFavourite,
        removeFavourite:removeFavourite
    }

   return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>
}

export default FavouriteContextProvider;