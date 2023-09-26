import { useContext } from "react";
import { MEALS } from "../../data/dummy-data";
import MealsList from "./MealsList";
import { FavouriteContext } from "../../store/context/favourites-context";
import { StyleSheet, Text, View } from "react-native";

function Favourites(){

    const favouriteMealsCtx= useContext(FavouriteContext);
    const favouriteMeals = MEALS.filter((meal) => favouriteMealsCtx.ids.includes(meal.id));

    if(favouriteMeals.length===0){
        return( 
            <View style={styles.rootContainer}>
               <Text style={styles.text}>You have no favourite meals yet...</Text>
            </View>
        )
    }
    return(
       <MealsList item={displayedMeals}/>
    )
}

export default Favourites;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontFamily:'open-sans'
    }
})