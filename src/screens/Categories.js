import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";



function Categories({navigation}) {

 function renderCategoryItem(itemData) {

    function pressHandler(){
      navigation.navigate('MealsOverview',{
        categoryId:itemData.item.id
      })
    }

   return (
     <CategoryGrid title={itemData.item.title} 
     color={itemData.item.color}
     onPress={pressHandler}
     navigation={navigation}
     />
   );
 }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default Categories;

const styles = StyleSheet.create({});
