import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/Mealtem";


function MealsList({item}){

       
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
            <FlatList data={item} 
            keyExtractor={(item)=>item.id}
            renderItem={renderMealItem}
             />
        </View>
    )

}


export default MealsList;

const styles =StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})