import { View ,Text, Pressable, Image ,StyleSheet ,Platform} from "react-native";
import {useNavigation} from "@react-navigation/native"
import MealDetails from "./MealDetails";


function MealItem({id,title,imageUrl,duration,complexity,affordability}){
    const navigaton = useNavigation();

    function selectMealItem(){
        navigaton.navigate('MealDetail',{
          mealId:id
        });
    }


    return(
        <View style={styles.mealItem}>
            <Pressable  
            android_ripple={{color:'#ccc'}}
            style={({ pressed }) => 
                pressed ? styles.buttonPressed : null
              }

              onPress={selectMealItem}
            >
                <View style={styles.innerContainer}>
                <View>
                    <Image style={styles.image} source={{uri:imageUrl}}/>
                <Text style={styles.title}>{title}</Text>
                </View>
                 <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        backgroundColor:'white',
        elevation:4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        textShadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden'
    },
    buttonPressed: {
        opacity: 0.5,
      },
    image:{
        width:'100%',
        height:200,
    },
    title:{
        textAlign:'center',
        fontFamily:'open-sans-bold',
        margin:10
    },
   
});
