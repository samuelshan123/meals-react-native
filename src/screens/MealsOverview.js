import { StyleSheet, View ,FlatList} from "react-native";
import { CATEGORIES, MEALS } from "../../data/dummy-data";
import MealItem from "../components/Mealtem";
import { useLayoutEffect } from "react";


function MealsOverview({route,navigation}){
   const catId =route.params.categoryId;
   const displayedMeals = MEALS.filter((item)=>{
   return item.categoryIds.indexOf(catId)>=0;
   })

   useLayoutEffect(()=>{
    const categoryTitle =CATEGORIES.find((category)=>category.id===catId).title
    navigation.setOptions({
        title:categoryTitle
       })
    
});

   
   function renderMealItem(itemData){
    const mealItems ={
        title:itemData.item.title,
        imageUrl:itemData.item.imageUrl,
        duration:itemData.item.duration,
        complexity:itemData.item.complexity,
        affordability:itemData.item.affordability,
        id:itemData.item.id
    }
    return <MealItem {...mealItems}/>
   }

    return(
        <View style={styles.container}>
            <FlatList data={displayedMeals} 
            keyExtractor={(item)=>item.id}
            renderItem={renderMealItem}
             />
        </View>
    )
}

export default MealsOverview;

const styles =StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})