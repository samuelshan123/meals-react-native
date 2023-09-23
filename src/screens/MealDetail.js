import { View ,Text ,Image, StyleSheet, ScrollView} from "react-native";
import { MEALS } from "../../data/dummy-data";
import MealDetails from "../components/MealDetails";


function MealDetail({route}){

    const mealId =route.params.mealId;
    const selectedMeal = MEALS.find((meal)=>meal.id===mealId);

    return(
        <ScrollView>
        <View>
            <Image style={styles.image} source={{uri:selectedMeal.imageUrl}}/>
            <Text style={styles.title}>
                {selectedMeal.title}
            </Text>
            <MealDetails duration={selectedMeal.duration}
            affordability={selectedMeal.affordability} complexity={selectedMeal.complexity}/>
         <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
            </View>
            
            <View style={styles.list}>
            {selectedMeal.ingredients.map((ingredient,i)=>(
                <Text>{i+1}. {ingredient}</Text>
            ))}
            </View>

             <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
            </View>
            
            <View style={styles.list}>
            {selectedMeal.steps.map((step,i)=>(
                <Text>{i+1}. {step}</Text>
            ))}
            </View>
        </View>
        </ScrollView>
    );
}

export default MealDetail;

const styles =StyleSheet.create({    
    image:{
        width:'100%',
        height:200
    },
    title:{
        fontSize:20,
        textAlign:'center',
        margin:8,
        fontFamily:'open-sans-bold'
    },
    subtitle:{
        fontSize:16.,
        fontFamily:'open-sans-bold',
        textAlign:'center',
        color:'#fe7b54',  
    },
    subtitleContainer:{
        margin:4,
        padding:6,
        borderBottomColor:'#f4511e',
        borderBottomWidth:2,
        marginHorizontal:24
    },
    list:{
        margin:4,
        padding:6,
        marginHorizontal:24

    }
})